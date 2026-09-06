export type Table={id:number;type:'Snooker'|'Pool';rateKey:'snooker'|'pool';active:ActiveSession|null};
export type ActiveSession={id:string;customer:string;phone:string;startTs:number;preview?:{durationMs:number;amount:number}};
export type Session={id:string;tableId:number;type:'Snooker'|'Pool';customer:string;phone:string;startDate:string;startTime:string;stopDate:string;stopTime:string;startTs:number;stopTs:number;durationMs:number;rate:number;amount:number};
export type State={settings:{snooker:number;pool:number};tables:Table[];history:Session[]};
