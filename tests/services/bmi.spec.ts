import { calculateImperial, calculateMetric, getWeightClassification } from '../../src/services/bmi'

describe('Body Mass Index Calculator Service', () => {


    it('should calculate bmi normally with imperial units', async () => {
        const bmi = calculateImperial({
            heightFeet: 5,
            heightInches: 7,
            weightPounds: 257.941
        })
        expect(Number(bmi.toFixed(2))).toEqual(40.39)
    })

    it('should calculate bmi normally with metric units', async () => {
        const bmi = calculateMetric({
            heightInCentimeters: 170.18,
            weightInKilograms: 117
        })

        expect(Number(bmi.toFixed(2))).toEqual(40.4)
    })

    it('should get weight classification normally', async () => {
        const classificationTitle = getWeightClassification(18.6);
        expect(classificationTitle).toBe("Normal weight")
    })

})