import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createProduct = async (req, res) => {
  const {
    Link,
    Name,
    Brand,
    FaceShape,
    Price,
    Gender,
    FrameColour,
    FrameShape,
    FrameStyle,
    LinkPic1,
    LinkPic2,
    LinkPic3,
    FrameMaterial,
  } = req.body;

  try {
    const eyeglass = await prisma.eyeglasses.create({
      data: {
        Link,
        Name,
        Brand,
        FaceShape,
        Price,
        Gender,
        FrameColour,
        FrameShape,
        FrameStyle,
        LinkPic1,
        LinkPic2,
        LinkPic3,
        FrameMaterial,
      },
    });
    res.status(201).json(eyeglass);
  } catch (error) {
    console.error("Error creating product:", error);
    res.status(400).json({
      msg: "Terjadi kesalahan saat membuat produk.",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const {
    Link,
    Name,
    Brand,
    FaceShape,
    Price,
    Gender,
    FrameColour,
    FrameShape,
    FrameStyle,
    LinkPic1,
    LinkPic2,
    LinkPic3,
    frameMaterial,
  } = req.body;
  const updateData = {};

  if (Link) updateData.Link = Link;
  if (Name) updateData.Name = Name;
  if (Brand) updateData.Brand = Brand;
  if (FaceShape) updateData.FaceShape = FaceShape;
  if (Price) updateData.Price = Price;
  if (Gender) updateData.Gender = Gender;
  if (FrameColour) updateData.FrameColour = FrameColour;
  if (FrameShape) updateData.FrameShape = FrameShape;
  if (FrameStyle) updateData.FrameStyle = FrameStyle;
  if (LinkPic1) updateData.LinkPic1 = LinkPic1;
  if (LinkPic2) updateData.LinkPic2 = LinkPic2;
  if (LinkPic3) updateData.LinkPic3 = LinkPic3;
  if (frameMaterial) updateData.frameMaterial = frameMaterial;

  try {
    const updatedEyeglass = await prisma.eyeglasses.update({
      where: {
        idEyeglass: Number(req.params.id),
      },
      data: updateData,
    });
    res.status(200).json(updatedEyeglass);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getAllProduct = async (req, res) => {
  const { faceshape } = req.query;

  try {
    const eyeglass = await prisma.eyeglasses.findMany({
      where: {
        FaceShape: faceshape,
      },
    });

    return res.status(200).json(eyeglass);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

export const getProductById = async (req, res) => {
  try {
    const eyeglass = await prisma.eyeglasses.findUnique({
      where: {
        idEyeglass: Number(req.params.id),
      },
    });
    if (!eyeglass) {
      return res.status(404).json({ msg: "product tidak ditemukan" });
    }
    return res.status(200).json(eyeglass);
  } catch (error) {
    return res.status(404).json({ msg: error.message });
  }
};
