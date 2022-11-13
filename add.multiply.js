/* 
chairWood = 3cft/chair
tableWood = 10cft/table
bedWood = 50cft/bed
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood   = 50;

     // wood calculation

     const ChairWoodQuantity = chairQuantity * perChairWood;
     const TableWoodQuantity = tableQuantity * perTableWood;
     const BedWoodQuantity   =  bedQuantity * perBedWood;

      // adding all wood quantity
      const totalWood = ChairWoodQuantity + TableWoodQuantity + BedWoodQuantity;
      return totalWood;
}

const firstOption = woodCalculator( 1, 2, 3);
console.log(firstOption);