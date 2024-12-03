FROM python:3.10-slim

ENV PYTHONBUFFERED True

RUN apt-get update && apt-get install -y \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgl1-mesa-glx && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

ENV APP_HOME /app
WORKDIR $APP_HOME

COPY . ./

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["python", "app.py"]