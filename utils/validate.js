import Ajv from 'ajv';
import schema from '../schema.json';

export default new Ajv().compile(schema);
