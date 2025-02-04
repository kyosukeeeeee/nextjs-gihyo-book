import { ApiContext, User } from 'types'
import { fetcher } from 'utils'

export type SigninPrams = {
    username: string
    password: String
}

const signin = async (
    context: ApiContext,
    prams: SigninPrams
): Promise<User> => {
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signin`,
        {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(prams)
        }
    )
}

export default signin