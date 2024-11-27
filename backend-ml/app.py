import os
import cv2
import numpy as np
from flask import Flask, jsonify, request
from tensorflow.keras.models import load_model
import tensorflow as tf
from werkzeug.utils import secure_filename

app = Flask(__name__)

# Configuration
app.config['ALLOWED_EXTENSIONS'] = {'png', 'jpg', 'jpeg'}
app.config['UPLOAD_FOLDER'] = 'static/uploads/'
app.config['MODEL_FILE'] = 'face_types_model.h5'

# Load the trained model
model = load_model(app.config['MODEL_FILE'])

# Class names
class_names = ['Heart', 'Oval', 'Oblong', 'Round', 'Square']

# Ensure upload folder exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

def allowed_file(filename):
    """Check if the file extension is allowed."""
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

@app.route("/predict", methods=["POST"])
def predict():
    try:
        # Check if an image is included in the request
        if "image" not in request.files:
            return jsonify({"error": "No image file provided."}), 400

        image_file = request.files["image"]

        # Validate file type
        if not allowed_file(image_file.filename):
            return jsonify({"error": "Invalid file format. Please upload a PNG, JPG, or JPEG image."}), 400

        # Save the uploaded file
        filename = secure_filename(image_file.filename)
        filepath = os.path.abspath(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        image_file.save(filepath)

        # Read and preprocess the image
        image = cv2.imread(filepath)
        image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        resized_image = tf.image.resize(image, (250, 190))  # Match model input size
        normalized_image = resized_image / 255.0  # Normalize pixel values
        input_data = np.expand_dims(normalized_image, axis=0)  # Expand dimensions for batch size

        # Make predictions
        predictions = model.predict(input_data)
        predicted_class_index = np.argmax(predictions, axis=1)[0]
        predicted_class = class_names[predicted_class_index]

        return jsonify({"prediction": predicted_class}), 200

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=int(os.environ.get("PORT", 8080)))