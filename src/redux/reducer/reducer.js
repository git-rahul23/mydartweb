
const initialState = {
   data  : [
       { 
         sname : 'AADR',
         quantity : 430,
         avgcost :41.75,
         investedAmount:17952.07,
         marketValue:21629,
         pecentOfPortfolio:22.06,
         unrealPL:3676.93,
         percentReturn:20.48,
         lastCheckReturn : true,
         price : 50.3
      },
      {
         sname : 'MFEM',
         quantity : 210,
         avgcost :22.50,
         investedAmount:4725.84,
         marketValue:4872,
         pecentOfPortfolio:5.81,
         unrealPL:146.16,
         percentReturn:3.09,
         lastCheckReturn : true,
         price : 23.2
      },
      {
         sname : 'JPEM',
         quantity : 382,
         avgcost :56.70,
         investedAmount:18597.6,
         marketValue:17220,
         pecentOfPortfolio:22.86,
         unrealPL:1377.60,
         percentReturn:7.41,
         lastCheckReturn : false,
         price : 50.5
      },
      {
         sname : 'KEMQ',
         quantity : 801,
         avgcost :22.24,
         investedAmount:17811.04,
         marketValue:16340.4,
         pecentOfPortfolio:21.89,
         unrealPL:1470.64,
         percentReturn:8.26,
         lastCheckReturn : false,
         price : 20.4
      } ,
      {
         sname : 'KLDQ',
         quantity : 523,
         avgcost :26.32,
         investedAmount:13765.36,
         marketValue:17206.7,
         pecentOfPortfolio:16.92,
         unrealPL:3441.34,
         percentReturn:25.00,
         lastCheckReturn : true,
         price : 32.9
      },
      {
         sname : 'KOIN',
         quantity : 335,
         avgcost :25.40,
         investedAmount:8509,
         marketValue:8509,
         pecentOfPortfolio:10.46,
         unrealPL:0.00,
         percentReturn:0.00,
         lastCheckReturn : true,
         price : 20.4
      },
   ],

  updateData : false,
 chartValue : [
    { name: 'Mutual Funds', value: 72.62 },
    { name: 'ETFs', value: 27.28 },
 ],
 
}


const subReducer = (state = initialState, action) => {
    switch(action.type){
        case 'SUBMIT' : 
      console.log(action.newValues);
      let totalData = [...state.data];
      let reqData = totalData.map((d) => {
        if (d.sname === action.newValues.sname) {
          return { ...d, ...action.newValues };
        } else return d;
      });
      return {
        ...state,
        data: reqData,
        updateData: !state.updateData
      };

        default : return state
    }
}

export default subReducer;