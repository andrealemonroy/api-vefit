import { Response, Request, NextFunction } from "express";
import Disease from "../models/disease.model";

export const getDiseases = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const diseases = await Disease.find();
        console.log(diseases)
        res.status(200).json(diseases);
    } catch (error) {
        next(error);
    }
}

export const getDisease = async (
    req: Request,

    res: Response,
    next: NextFunction
) => {
    try {
        const disease = await Disease.findById(req.params.id);
        res.status(200).json(disease);
    } catch (error) {
        next(error);
    }
}

export const createDisease = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const disease = await Disease.create(req.body);
        res.status(201).json(disease);
    }
    catch (error) {
        next(error);
    }
}

export const updateDisease = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const disease = await Disease.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(disease);
    } catch (error) {
        next(error);
    }
}

export const deleteDisease = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const disease = await Disease.findByIdAndDelete(req.params.id);
        res.status(200).json(disease);
    }
    catch (error) {
        next(error);
    }
}

