"use strict";
const crypto = require("crypto");
const TYPES = new Set(["EMAIL","PHONE","USERNAME","DOMAIN","URL","PROFILE","ORGANIZATION","DOCUMENT"]);
const ROLES = { Administrator:["manage:system","manage:users"], Investigator:["case:create","target:write","search:start","evidence:read"], Analyst:["evidence:read","entity:review","note:write","report:draft"], Supervisor:["case:review","report:approve","entity:review"], Auditor:["audit:read","evidence:read"] };
const id = prefix => `${prefix}-2026-${crypto.randomUUID().slice(0,8).toUpperCase()}`;
const now = () => new Date().toISOString();
const hash = value => crypto.createHash("sha256").update(value).digest("hex");
function validateTarget(type,value){
  if(!TYPES.has(type)||typeof value!=="string"||!value.trim()||value.length>500)return false;
  const v=value.trim();
  if(type==="EMAIL")return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  if(type==="PHONE")return /^\+?[0-9()\s.-]{7,25}$/.test(v);
  if(type==="USERNAME")return /^[a-zA-Z0-9_.-]{1,64}$/.test(v);
  if(type==="DOMAIN")return /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:test|org|com|net)$/i.test(v);
  if(type==="URL"||type==="PROFILE"){try{return ["http:","https:"].includes(new URL(v).protocol)}catch{return false}}
  return v.length<=250;
}
function seed(){
 const createdAt="2026-09-13T01:58:00.000Z", caseId="INV-2026-00142", evidenceId="EVD-2026-00481";
 const investigation={id:caseId,title:"Synthetic public web correlation review",description:"Development fixture for lawful public-source workflow validation.",priority:"HIGH",status:"ACTIVE",investigator:"investigator",analysts:["dev.analyst"],createdAt,updatedAt:now(),authorization:{id:"AUTH-2026-0088",purpose:"Public-source investigation",scope:"Email, domain, public web and approved development connectors",approvedBy:"dev.supervisor",approvedAt:createdAt,expiresAt:"2026-09-30T23:59:59.000Z",permittedTypes:["EMAIL","DOMAIN","URL","USERNAME"],status:"VALID"}};
 const target={id:"TARGET-00027",caseId,type:"EMAIL",value:"alex.rivera@example.test",label:"Primary public identifier",source:"Analyst entry",addedAt:createdAt,addedBy:"investigator",verification:"UNVERIFIED",notes:"Synthetic development target."};
 const evidence={id:evidenceId,caseId,source:"Development public-web fixture",url:"https://research.example.test/public-profile",collectedAt:"2026-09-13T02:18:00.000Z",collectedBy:"connector.public-web",contentType:"text/html",sha256:hash("synthetic-public-profile-alex-rivera"),verification:"REQUIRES REVIEW",description:"Synthetic public profile reference used to exercise the evidence workflow."};
 const entity={id:"ENTITY-EMAIL-0007",caseId,type:"EMAIL",label:target.value,identifiers:[target.value],confidence:78,verification:"REQUIRES REVIEW",evidenceIds:[evidenceId]};
 return {organization:{id:"ORG-DEV-001",name:"National Security Analysis Division - DEV",environment:"DEVELOPMENT",synthetic:true},users:[{id:"USR-DEV-001",username:"investigator",displayName:"Dev Investigator",role:"Investigator",organizationId:"ORG-DEV-001",fixture:true}],investigations:[investigation],targets:[target],searchJobs:[],searchResults:[],evidence:[evidence],evidenceEvents:[{id:"EVT-001",caseId,evidenceId,action:"EVIDENCE_COLLECTED",timestamp:evidence.collectedAt,actor:"connector.public-web"},{id:"EVT-002",caseId,evidenceId,action:"HASH_GENERATED",timestamp:"2026-09-13T02:18:01.000Z",actor:"system"}],entities:[entity,{id:"ENTITY-PROFILE-0031",caseId,type:"PROFILE",label:"Public profile reference",identifiers:["alex-rivera-dev"],confidence:68,verification:"UNVERIFIED",evidenceIds:[evidenceId]}],relationships:[{id:"REL-2026-0019",caseId,from:entity.id,to:"ENTITY-PROFILE-0031",type:"possible_association",confidence:78,evidenceIds:[evidenceId],verification:"REQUIRES HUMAN VERIFICATION",createdAt,updatedAt:createdAt}],notes:[],tasks:[{id:"TASK-0028",caseId,title:"Review synthetic relationship evidence",assignedTo:"dev.analyst",priority:"HIGH",status:"OPEN",createdAt}],reports:[],audit:[],notifications:[],timeline:[{id:"TIME-001",caseId,type:"SYSTEM",action:"INVESTIGATION_CREATED",timestamp:createdAt,detail:"Development investigation initialized."},{id:"TIME-002",caseId,type:"EVIDENCE",action:"EVIDENCE_CAPTURED",timestamp:evidence.collectedAt,detail:`Evidence ${evidenceId} captured.`}]};
}
module.exports={TYPES,ROLES,id,now,hash,validateTarget,seed};
