import {convertCardNameIntoParam} from './StringUtils'

it('replaces white space with +', () => {
    expect(convertCardNameIntoParam('john fisher'))
    .toEqual('john+fisher')
})