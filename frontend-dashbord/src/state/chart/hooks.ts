import { useSelector } from 'react-redux'
import { AppState } from 'state'
import { API_URL } from 'config/endpoints'

export function useAggVolume () {
  const { aggVolume } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return aggVolume
}
export function useAggLiquidity () {
  const { aggLiquidity } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return aggLiquidity
}
export function usePoolFees () {
  const { poolFees } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolFees
}
export function usePoolVolume () {
  const { poolVolume } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolVolume
}
export function usePoolLiquidity () {
  const { poolLiquidity } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolLiquidity
}
export function usePoolTxCount () {
  const { poolTxCount } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolTxCount
}
export function usePoolAPY () {
  const { poolAPY } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolAPY
}
export function usePoolTransactions () {
  const { poolTransactions } = useSelector<AppState, AppState['chart']>(
    state => state.chart
  )
  return poolTransactions
}

export async function getAggVolume (start: string, end: string, grain: string) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/aggregate/volume?start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getAggVolume: error fetching', e)
    return null
  }
}

export async function getAggLiquidity (
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/aggregate/liquidity?start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getAggLiquidity: error fetching', e)
    return null
  }
}

export async function getPoolFees (
  pool: string,
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/pool/fees?pool="${pool}"&start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolFees: error fetching', e)
    return null
  }
}

export async function getPoolVolume (
  pool: string,
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/pool/volume?pool="${pool}"&start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolVolume: error fetching', e)
    return null
  }
}

export async function getPoolLiquidity (
  pool: string,
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/pool/liquidity?pool="${pool}"&start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolLiquidity: error fetching', e)
    return null
  }
}

export async function getPoolTXCount (
  pool: string,
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/pool/tx-count?pool="${pool}"&start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolTXCount: error fetching', e)
    return null
  }
}

export async function getPoolAPY (
  pool: string,
  start: string,
  end: string,
  grain: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/chart/pool/apy?pool="${pool}"&start=${start}&end=${end}&grain="${grain}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolAPY: error fetching', e)
    return null
  }
}

export async function getPoolTransactions (
  pool: string,
  start: number,
  end: number,
  type: string
) {
  try {
    const result = await fetch(
      API_URL +
        `/transactions?pool="${pool}"&start=${start}&end=${end}&type="${type}"`
    )

    return result.json()
  } catch (e) {
    console.log('getPoolTransactions: error fetching', e)
    return null
  }
}