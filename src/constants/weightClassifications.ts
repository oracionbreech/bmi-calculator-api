export const weightClassifications = [
    {
        name: 'underweight',
        title: 'Underweight',
        getBmi: (bmi: number) => {
            return bmi < 18.5
        }
    },
    {
        name: 'normalWeight',
        title: 'Normal weight',
        getBmi: (bmi: number) => {
            return bmi >= 18.5 && bmi <= 24.9
        }
    },
    {
        name: 'overweight',
        title: 'Overweight',
        getBmi: (bmi: number) => {
            return bmi >= 25 && bmi <= 29.9
        }
    },
    {
        name: 'obesityClassOne',
        title: 'Obesity Class 1',
        getBmi: (bmi: number) => {
            return bmi >= 30 && bmi <= 34.9
        }
    },
    {
        name: 'obesityClassTwo',
        title: 'Obesity Class 2',
        getBmi: (bmi: number) => {
            return bmi >= 35 && bmi <= 39.9
        }
    },
    {
        name: 'extremeObesityClassThree',
        title: 'Extreme Obesity Class 3	',
        getBmi: (bmi: number) => {
            return bmi > 40
        },
    }
]