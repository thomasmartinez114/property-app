import connectDB from '@/config/database';
import Property from '@/models/Property';
import { connect } from 'mongoose';

const PropertyPage = async ({ params }) => {
  await connectDB();
  const property = await Property.findById(params.id).lean();

  return <section>{property.name}</section>;
};

export default PropertyPage;
