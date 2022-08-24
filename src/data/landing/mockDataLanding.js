export function createMockService(index, title, width = 200, height = 200) {
  const sizes = `${width}x${height}`;
  const text = "Service " + index;
  return {
    title: text,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    imgUrl: `https://via.placeholder.com/${sizes}?text=${text}&bg=373940`
  };
}

function createMockImage(index, title, width = 800, height = 240) {
  const sizes = `${width}x${height}`;
  const text = title || "Image" + index;
  return {
    title: text,
    description: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
    url: `https://via.placeholder.com/${sizes}?text=${text}&bg=373940`
  };
}

export const mockServices = [
  createMockService(0),
  createMockService(1),
  createMockService(2)
];
export const mockImages = [
  createMockImage(0),
  createMockImage(1),
  createMockImage(2)
];
