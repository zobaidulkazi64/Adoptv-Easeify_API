import { z } from "zod";

export const UserCreateSchema = z.object({
  authUserId: z.string(),
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(200),
});

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6).max(200),
});

export const UserUpdateSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6).max(200),
});

export const UserGetSchema = z.object({
  id: z.string().cuid(),
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6).max(200),
});

export const UserDeleteSchema = z.object({
  id: z.string().cuid(),
});
