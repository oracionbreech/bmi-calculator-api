export const calculateImperial = ({
    heightFeet = 0, heightInches = 0, weightPounds = 0
}) => {
    const totalHeight = (heightFeet * 12) + heightInches

    const bmi = (weightPounds / (totalHeight ** 2)) * 703

    return bmi;
}

export const calculateMetric = ({
    heightInCentimeters = 0, weightInKilograms = 0
}) => {

    return (weightInKilograms / ((heightInCentimeters / 100) ** 2));
}