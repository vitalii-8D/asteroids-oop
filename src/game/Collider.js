const distanceBetweenPoint = (x1, x2, y1, y2) => {
   const dx = x1 - x2
   const dy = y1 - y2
   return Math.sqrt(dx ** 2 + dy ** 2)
}

class Collider {
   constructor() {
   }

   checkCollisionBetween(obj1, obj2, callback) {

      if (Array.isArray(obj1) && Array.isArray(obj2)) {
         if (!obj1.length || !obj2.length) return false

         for (let i = 0; i < obj1.length; i++) {
            const {x: x1, y: y1, radius: r1} = obj1[i]

            for (let j = 0; j < obj2.length; j++) {
               const {x: x2, y: y2, radius: r2} = obj2[j]

               const dist = distanceBetweenPoint(x1, x2, y1, y2);
               if (dist < r1 + r2) {
                  callback(obj1[i], i, obj2[j], j)
                  return true
               }
            } // 2nd for
         } // 1st for

         return false
      } // if

      if (Array.isArray(obj1)) {
         if (!obj1.length) return false

         const {x: x2, y: y2, radius: r2} = obj2

         for (let i = 0; i < obj1.length; i++) {
            const {x: x1, y: y1, radius: r1} = obj1[i]

            const dist = distanceBetweenPoint(x1, x2, y1, y2);
            if (dist < r1 + r2) {
               callback(obj1[i], i, obj2)
               return true
            }

         }

         return false
      }

      if (Array.isArray(obj2)) {
         if (!obj2.length) return false

         const {x: x1, y: y1, radius: r1} = obj1

         for (let i = 0; i < obj2.length; i++) {
            const {x: x2, y: y2, radius: r2} = obj2[i]

            const dist = distanceBetweenPoint(x1, x2, y1, y2);
            if (dist < r1 + r2) {
               callback(obj1, obj2[i], i)
               return true
            }

         }

         return false
      }

      const {x: x1, y: y1, radius: r1} = obj1
      const {x: x2, y: y2, radius: r2} = obj2

      const dist = distanceBetweenPoint(x1, x2, y1, y2);
      if (dist < r1 + r2) {
         callback(obj1, obj2)
         return true
      }

      return false

   }
}

export {distanceBetweenPoint}

export default Collider
