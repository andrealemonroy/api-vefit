import { NextFunction } from 'express';
import FoodPlan from '../models/FoodPlans.model';

export const getFoodPlans = async (req: any, res: any, next: NextFunction) => {
  try {
    const foodPlans = await FoodPlan.find();
    res.json(foodPlans);
  } catch (error) {
    next(error);
  }
};

export const getFoodPlan = async (req: any, res: any, next: NextFunction) => {
  try {
    const foodPlan = await FoodPlan.findById(req.params.id);
    res.json(foodPlan);
  } catch (error) {
    next(error);
  }
};

export const createFoodPlan = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    const foodPlan = await FoodPlan.create(req.body);
    res.status(201).json(foodPlan);
  } catch (error) {
    next(error);
  }
};

export const updateFoodPlan = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const foodPlan = await FoodPlan.findByIdAndUpdate(req.params.id, req.body);
  res.json(foodPlan);
};

export const deleteFoodPlan = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  try {
    await FoodPlan.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
