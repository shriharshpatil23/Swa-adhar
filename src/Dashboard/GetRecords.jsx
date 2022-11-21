import { getDoctorRecords, getPatientRecords } from '../SmartContract';
export const getArray = async (role, length, healthId) => {
        if(role === 'Patient')
        {
            getPatientRecords(length, healthId)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                console.log('error', err);
            });
        }
        else
        {
            getDoctorRecords(length, healthId)
            .then((res)=>{
                return res;
            })
            .catch((err)=>{
                console.log('error', err);
            });
        }
    }

