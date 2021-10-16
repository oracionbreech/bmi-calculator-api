import { info } from 'console'
import request from 'supertest'
import app from '../../src/index'

describe('Post Endpoints', () => {
    it('should get imperial bmi', async () => {

        try {
            const { body } = await request(app)
                .post('/bmi/imperial',).send({
                    heightInches: 7,
                    heightFeet: 5,
                    weightPounds: 256.6
                })

            info(body)

        } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(error);
        }

    })

    it('should get metric bmi', async () => {

        try {
            const { body } = await request(app)
                .post('/bmi/metric',).send({
                    heightCentimeters: 170.8,
                    weightKilograms: 117.6
                })

            info(body)

        } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(error);
        }

    })
})