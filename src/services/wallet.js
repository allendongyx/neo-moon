import { requestOpenApi } from '../utils/request'
import qs from 'qs'

/**
 * 根据账户地址，查询账户资产信息。
 * @param {*} address 账户地址，以 A 开头的 34 位长度的字符串，如 AJBENSwajTzQtwyJFkiJSv7MAaaMc7DsRz。
 */
export async function getAccountState (address) {
  return requestOpenApi(
    `/mainnet/address/balances/` + address, {
      method: 'GET'
    }
  )
}

/**
 * 根据账户地址，查新地址交易记录
 * @param {*} address 账户地址，以 A 开头的 34 位长度的字符串，如 AJBENSwajTzQtwyJFkiJSv7MAaaMc7DsRz。
 */
export async function queryTransaction (address) {
  return requestOpenApi(
    `/mainnet/public/graphql`, {
      method: 'POST',
      body: JSON.stringify({ "query": "{TransactionQuery (skip:0, limit:15 ,address: \"" + address + "\" ) {count,rows { _id txid blockIndex time size type vin { vout txid utxo { address value asset name } } vout { address value asset n name } nep5 { to from symbol value operation assetId } scripts { invocation verification } }}}" })
    }
  )
}
