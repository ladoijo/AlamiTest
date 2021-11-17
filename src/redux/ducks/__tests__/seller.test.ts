import reducer, * as channelDuck from '~/redux/ducks/seller'
import type {} from '~/redux/ducks/seller'

describe('Action', () => {
  it('creates action to fetch channel payment', () => {
    const expectAction = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH,
    }
    expect(channelDuck.channelPaymentFetch()).toEqual(expectAction)
  })
  it('creates action to fetch channel payment failed', () => {
    const expectAction = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH_FAILED,
    }
    expect(channelDuck.channelPaymentFetchFailed()).toEqual(expectAction)
  })
  it('creates action to fetch channel payment success', () => {
    const expectAction = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH_SUCCESS,
      payload: ResponseChannelPayment.data.items,
    }
    expect(channelDuck.channelPaymentFetchSuccess(ResponseChannelPayment.data.items)).toEqual(
      expectAction,
    )
  })
  it('creates action to reset channel payment', () => {
    const expectAction = {
      type: channelDuck.CHANNEL_PAYMENT_RESET,
    }
    expect(channelDuck.channelPaymentReset()).toEqual(expectAction)
  })
})

describe('Reducer:', () => {
  it('handles action fetch channel payment', () => {
    const action = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH,
    }
    const expectedState = {
      ...channelDuck.INITIAL_STATE,
      list: {
        ...channelDuck.INITIAL_STATE.list,
        isLoading: true,
      },
    }
    expect(reducer(channelDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action fetch channel payment failed', () => {
    const action = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH_FAILED,
    }
    const expectedState = {
      ...channelDuck.INITIAL_STATE,
      list: {
        ...channelDuck.INITIAL_STATE.list,
        isLoading: false,
      },
    }
    expect(reducer(channelDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action fetch channel payment success', () => {
    const action = {
      type: channelDuck.CHANNEL_PAYMENT_FETCH_SUCCESS,
      payload: ResponseChannelPayment.data.items,
    }
    const expectedState = {
      ...channelDuck.INITIAL_STATE,
      list: {
        data: ResponseChannelPayment.data.items,
        isLoading: false,
      },
    }
    expect(reducer(channelDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
  it('handles action to reset channel payment', () => {
    const action = {
      type: channelDuck.CHANNEL_PAYMENT_RESET,
    }
    const expectedState = channelDuck.INITIAL_STATE
    expect(reducer(channelDuck.INITIAL_STATE, action)).toEqual(expectedState)
  })
})
