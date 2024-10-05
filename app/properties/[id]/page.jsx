import PropertyHeaderImage from '@/components/PropertyHeaderImage';
import connectDB from '@/config/database';
import Property from '@/models/Property';

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>{property.name}</section>
    </>
  );
};

export default PropertyPage;
