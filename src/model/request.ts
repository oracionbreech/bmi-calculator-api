import { Request } from "express";

export interface ICalculateBmiImperialRequest extends Request {
    body: {
        heightFeet: number,
        heightInches: number,
        weightPounds: number
    }
}