// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML;

const useMedicalDepartment  = function() {
  class Medical {
    constructor(surgeon, nurse, medecin){
      this._surgeon = surgeon; 
      this._nurse = nurse; 
      this._medecin = medecin; 
    } 
  
    get surgeon() {
      return this._surgeon;
    } 
  
    get nurse() {
      return this._nurse; 
    }
      
    get medecin() {
      return this._medecin; 
    } 
  }

  const newMedicalDepartment = new Medical(
    'Surgeon - Dep. 3', 
    'nurse - Dep. 10', 
    'medecin - Dep. 33'
  );
  
  console.log(newMedicalDepartment);
  // should print : 
  // 'Surgeon - Dep. 3', 'nurse - Dep. 10', 'medecin - Dep. 33'
}
useMedicalDepartment(); // call the function 

