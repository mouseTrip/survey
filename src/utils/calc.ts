/*
 * @Author: Terry Zhang
 * @Date: 2020-04-19 22:20:50
 * @LastEditors: Terry Zhang
 * @LastEditTime: 2020-04-29 22:31:06
 * @Description: 
 */
export const px2vw = (px: number) => Number.parseFloat((px / (375 / 100)).toFixed(6))
export const px2vh = (px: number) => Number.parseFloat((px / (667 / 100)).toFixed(6))
export default {
  px2vw,
  px2vh
}