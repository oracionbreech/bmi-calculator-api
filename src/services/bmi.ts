export const calculateImperial = ({
    heightInFeet = 0, heightInInches = 0, weightInPounds = 0
}) => {
    const totalHeight = (heightInFeet * 12) + heightInInches

    const bmi = (weightInPounds / (totalHeight ** 2)) * 703

    return bmi;
}

export const calculateMetric = ({
    heightInCentimeters = 0, weightInKilograms = 0
}) => {

    return (weightInKilograms / ((heightInCentimeters / 100) ** 2));
}