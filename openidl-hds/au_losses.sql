create table au_losses
(
LineOfBusiness VARCHAR ( 255 ),
Subline VARCHAR ( 255 ),
SublineCategory VARCHAR ( 255 ),
AccountingDate VARCHAR ( 255 ),
CompanyCode VARCHAR ( 255 ),
CompanyID VARCHAR ( 255 ),
State VARCHAR ( 255 ),
Territory VARCHAR ( 25 ),
OptionalZipCodeIndicator VARCHAR ( 255 ),
Program VARCHAR ( 255 ),
EffectiveDate DATE,
ExpirationDate DATE,
NCProgramEnhancement VARCHAR ( 25 ),
ZipCode VARCHAR ( 25 ),
ZipCodeSuffix VARCHAR ( 255 ),
CoverageCategory VARCHAR ( 255 ),
Coverage VARCHAR ( 255 ),
CoverageCode VARCHAR ( 255 ),
DeductibleAmount VARCHAR ( 255 ),
DeductibleCode VARCHAR ( 255 ),
Terrorism VARCHAR ( 5 ),
Packaging VARCHAR ( 255 ),
PoolAffiliation VARCHAR ( 255 ),
UMUIMStacking VARCHAR ( 5 ),
PassiveRestraintDiscount VARCHAR ( 255 ),
AntiLockBrakesDiscount VARCHAR ( 255 ),
DefensiveDriverDiscount VARCHAR ( 255 ),
OperatorAge VARCHAR ( 255 ),
OperatorAgeCode VARCHAR ( 255 ),
Gender VARCHAR ( 255 ),
MaritalStatus VARCHAR ( 255 ),
MaritalStatusCode VARCHAR ( 255 ),
PrincipalSecondary VARCHAR ( 25 ),
DriversTraining VARCHAR ( 5 ),
GoodStudentDiscount VARCHAR ( 5 ),
PenaltyPoints NUMERIC ,
VehicleUse VARCHAR ( 255 ),
VehicleUseOperator VARCHAR ( 255 ),
CommuteDistance VARCHAR ( 255 ),
AnnualDistance VARCHAR ( 255 ),
VehiclePerformance VARCHAR ( 255 ),
ModelYear VARCHAR ( 55 ),
Symbol VARCHAR ( 55 ),
LossAmount NUMERIC,
ClaimCount NUMERIC,
CauseOfLoss VARCHAR ( 55 ),
AccidentDate DATE,
OccurrenceIdentifier VARCHAR ( 255 ),
ClaimIdentifier VARCHAR ( 55 ),
LimitedCodingLossTransaction VARCHAR ( 55 ),
createdTime VARCHAR ( 55 ),
RecordType VARCHAR ( 55 ),
TransactionType VARCHAR ( 55 ),
TransactionCode VARCHAR ( 55 ),
chunkId VARCHAR ( 55 )
);