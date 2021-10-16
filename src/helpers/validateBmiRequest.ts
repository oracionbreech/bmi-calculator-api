import * as Yup from 'yup';

export const ImperialSchema = Yup.object({
    body: Yup.object({
        heightFeet: Yup.string().matches(/\d+/g, "Feet should be a number.").required("Feet is required."),
        heightInches: Yup.string().matches(/\d+/g, "Inches should be a number.").required("Inches is required."),
        weightPounds: Yup.string().matches(/\d+/g, "Pounds should be a number.").required("Pounds is required.")
    })
})


export const MetricSchema = Yup.object({
    body: Yup.object({
        heightCentimeters: Yup.string().matches(/\d+/g, "Centimeters should be a number.").required("Centimeters is required."),
        weightKilograms: Yup.string().matches(/\d+/g, "Weight should be a number.").required("Weight is required.")
    })
})