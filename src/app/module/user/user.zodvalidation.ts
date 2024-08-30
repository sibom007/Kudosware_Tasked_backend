import z from 'zod';
const createUser = z.object({
  name: z.string().min(3).max(20),
  email: z.string().email(),
  address: z.string().min(3).max(20),
  number: z.string().min(3).max(20),
  collageName: z.string().min(3).max(20),
  collageAddress: z.string().min(3).max(20),
  resume: z.string(),
});






export const userValidation = {
    createUser,

} 