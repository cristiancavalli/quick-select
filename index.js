/**
 * Copyright 2017 Cristian Cavalli. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

class QuickSelect {
  static swap (underSelect, indX, indY) {
    var tmp = underSelect[indX];
    underSelect[indX] = underSelect[indY];
    underSelect[indY] = tmp;
  }
  static partiton (underSelect, left, right, pivotIndex) {
    var pivot = underSelect[pivotIndex];
    var pIndex = left;
    QuickSelect.swap(underSelect, pivotIndex, right);
    for (var i = left; i < right; i++) {
      if (underSelect[i] <= pivot) {
        QuickSelect.swap(underSelect, i, pIndex);
        pIndex++;
      }
    }
    QuickSelect.swap(underSelect, pIndex, right);
    return pIndex;
  }
  static select (underSelect, left=0, right, k=0) {
    var pivotIndex = 0;
    if (left === right) {
      return underSelect[left];
    }
    pivotIndex = QuickSelect.partiton(underSelect, left, right,
      ~~((Math.random() * (right - left + 1)) + left));

    switch (true) {
      case k === pivotIndex:
        return underSelect[k];
      case k < pivotIndex:
        return QuickSelect.select(underSelect, left, pivotIndex-1, k);
      default:
        return QuickSelect.select(underSelect, pivotIndex+1, right, k);
    }
  }
  static invocationInterface (underSelect, k) {
    return QuickSelect.select(underSelect, 0, underSelect.length-1,
      Number.isInteger(k) ? k : 0);
  }
}

module.exports = QuickSelect.invocationInterface;
