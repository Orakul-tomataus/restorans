import { sampleProducts } from "./Data";
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const noFilter = _ => true;
const popular = (x) => x.popular;
const lhSort = (a,b) => a.price - b.price;
const hlSort = (a,b) => b.price - a.price;
const map = new Map([
    [undefined,noFilter],
    ['All categories', noFilter],
    ['popular', popular],
    ['lh',lhSort],
    ['hl',hlSort]
  ]);
  /*category  = undefined || "All categories" || "popular" || category : string */
  const CategoryFilter = (w) => ( {...w,data: applyFilter(w.data, map.get(w.category) || (x => x.category === w.category) )})
  /*min,max = undefined || Number,Number */
  const PriceFilter = (w) => ({...w,data: applyFilter(w.data,(x => (!(x.price <  w.min || x.price > w.max))))})
  /*name = undefined || string*/ 
  const NameFilter = (w) => ({...w,data: applyFilter(w.data, map.get(w.name) || (x => (x.name.toLowerCase().includes(w.name.toLowerCase()))))})
  /*id = undefined || int */
  const IdFilter = (w) => (applyFilter(w.data, map.get(w.id) || (x=>x.id === w.id))[0])
  /*sort = undefined || "lh" || "hl"*/
  const PriceSorter = (w)=> ({...w,data:w.data.sort(map.get(w.sort)) || w}) 

  /*end wate on pipe*/
  const end = (w) => (w.data)

  const applyFilter = (dataset, filter) => (dataset.filter(filter))

 const SearchPipe = pipe(
  CategoryFilter,
  PriceFilter, 
  NameFilter, 
  PriceSorter,
  end
);
class Api {
 searchItems(params){
  return new Promise((res,rej) => {
     setTimeout(() => {
      res({data:SearchPipe({data:sampleProducts,...params})})
      },500)
    })
}
 getItemByID(id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(IdFilter({data:sampleProducts,id}));
      }, 500);
    });
}
}
export default new Api();
