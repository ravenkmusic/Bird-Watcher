// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let wholeBirdCount = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
      wholeBirdCount += birdsPerDay[i];
    }
    return wholeBirdCount;
  }
  
  /**
   * Calculates the total number of birds seen in a specific week.
   *
   * @param {number[]} birdsPerDay
   * @param {number} week
   * @returns {number} birds counted in the given week
   */
  export function birdsInWeek(birdsPerDay, week) {
    let start = (week - 1) * 7;
    let end = (week * 7);
    let totalInWeek = 0;
    
    for (let i = start; i < end; i++){
      totalInWeek += birdsPerDay[i];
    }
    
    console.log(totalInWeek);
    return totalInWeek
  }
  
  /**
   * Fixes the counting mistake by increasing the bird count
   * by one for every second day.
   *
   * @param {number[]} birdsPerDay
   * @returns {number[]} corrected bird count data
   */
  export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i++) {
      if (i % 2 ===0) {
        birdsPerDay[i]++;
      }
    }
    return birdsPerDay
  }