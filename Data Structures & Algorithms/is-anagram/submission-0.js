class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sLength = s.length;
        let tLength = t.length;

        if(sLength !== tLength) {
            return false;
        }
        let sMap = new Map();
        let tMap = new Map();

        let j = 0;

        for (let i = 0; i < sLength; i++) {
            sMap.set(s[i], (sMap.get(s[i]) || 0) + 1);
            tMap.set(t[j], (tMap.get(t[j]) || 0) + 1);
            j++;
        }


        let letterSet = Array.from(new Set(s));
        let resp = [];
        for (let i = 0; i < letterSet.length; i++) {
            if (sMap.get(letterSet[i]) === tMap.get(letterSet[i])) {
                resp.push(true);
            } else {
                resp.push(false);
            }
        }

        if (resp.indexOf(false) != -1) {
            return false;
        }
        
        return true;

    }
}
