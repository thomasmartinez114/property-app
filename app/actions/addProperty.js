'use server';

async function addProperty(formData) {
  // Access all values from amenities and images
  const amenities = formData.getAll('amenities');
  const images = formData
    .getAll('images')
    .filter(image => image.name !== '')
    .map(image => image.name);
  console.log(images);
}

export default addProperty;
