/* time */
const DAYS = 24 * 3600
const WEEKS = 7 * DAYS
const MONTHS = 30 * DAYS

/* constants */
const PPM = 1e6
const PCT_BASE = 1e18

/* addresses */
const ANY_ADDRESS = '0xffffffffffffffffffffffffffffffffffffffff'
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
const ETH = '0x0000000000000000000000000000000000000000'

/* balances */
const INITIAL_COLLATERAL_BALANCE = Math.pow(10, 23)

/* presale */
const PRESALE_STATE = {
  PENDING: 0,
  FUNDING: 1,
  REFUNDING: 2,
  GOAL_REACHED: 3,
  CLOSED: 4,
}
const PRESALE_GOAL = '20000e18'
const PRESALE_PERIOD = 14 * DAYS
const PRESALE_EXCHANGE_RATE = 1 * PPM
const VESTING_CLIFF_PERIOD = 90 * DAYS
const VESTING_COMPLETE_PERIOD = 360 * DAYS
const PERCENT_SUPPLY_OFFERED = 0.9 * PPM // 90%
const PERCENT_FUNDING_FOR_BENEFICIARY = 0.25 * PPM // 25%
const CONNECTOR_WEIGHT = 0.1 * PPM // 10%

/* market maker */
const VIRTUAL_SUPPLIES = [new web3.BigNumber(Math.pow(10, 23)), new web3.BigNumber(Math.pow(10, 22))]
const VIRTUAL_BALANCES = [new web3.BigNumber(Math.pow(10, 22)), new web3.BigNumber(Math.pow(10, 20))]
const RESERVE_RATIOS = [(PPM * 10) / 100, (PPM * 1) / 100]
const SLIPPAGES = [10 * PCT_BASE, 15 * PCT_BASE]
const BUY_FEE_PCT = 100000000000000000 // 1%
const SELL_FEE_PCT = 100000000000000000

/* tap */
const RATES = [10, 15]
const FLOORS = [1000, 5000]
const BATCH_BLOCKS = 10
const MAXIMUM_TAP_RATE_INCREASE_PCT = 50e16
const MAXIMUM_TAP_FLOOR_DECREASE_PCT = 60e16

module.exports = {
  DAYS,
  WEEKS,
  MONTHS,
  PPM,
  PCT_BASE,
  ANY_ADDRESS,
  ZERO_ADDRESS,
  ETH,
  INITIAL_COLLATERAL_BALANCE,
  PRESALE_STATE,
  PRESALE_GOAL,
  PRESALE_PERIOD,
  PRESALE_EXCHANGE_RATE,
  VESTING_CLIFF_PERIOD,
  VESTING_COMPLETE_PERIOD,
  PERCENT_SUPPLY_OFFERED,
  PERCENT_FUNDING_FOR_BENEFICIARY,
  CONNECTOR_WEIGHT,
  VIRTUAL_SUPPLIES,
  VIRTUAL_BALANCES,
  RESERVE_RATIOS,
  SLIPPAGES,
  RATES,
  FLOORS,
  BUY_FEE_PCT,
  SELL_FEE_PCT,
  BATCH_BLOCKS,
  MAXIMUM_TAP_RATE_INCREASE_PCT,
  MAXIMUM_TAP_FLOOR_DECREASE_PCT,
}
