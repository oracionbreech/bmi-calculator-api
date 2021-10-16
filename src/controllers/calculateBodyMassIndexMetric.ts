import { Response } from "express"
import { StatusCodes } from "http-status-codes"
import { MetricSchema } from "../helpers/validateBmiRequest";
import { ICalculateBmiMetricRequest } from "../model/request"
import { calculateMetric, getWeightClassification } from "../services/bmi";

const calculateBodyMassIndexMetric = async (req: ICalculateBmiMetricRequest, res: Response) => {
    try {

        await MetricSchema.validate(req);

        const bmi = calculateMetric(req.body)

        const classification = getWeightClassification(bmi)

        return res.status(StatusCodes.OK).json({
            message: "Ok",
            bmi,
            classification
        })
    } catch (error) {
        if (error.name && error.name === 'ValidationError') {
            return res.status(StatusCodes.BAD_REQUEST).json({
                name: error.name,
                message: error.message
            })
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: 'Internal server error'
        })
    }
}

export default calculateBodyMassIndexMetric;