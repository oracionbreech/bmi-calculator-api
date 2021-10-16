import { info } from 'console'
import request from 'supertest'
import app from '../../src/index'

describe('Post Endpoints', () => {
    it('should create a new post', async () => {

        try {
            const { body } = await request(app)
                .post('/bmi/imperial',).send({
                    heightInches: 200
                })


        } catch (error) {
            // eslint-disable-next-line no-console
            console.warn(error);
        }

    })
})