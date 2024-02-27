import React, { useState } from 'react';

function Checkout() {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3; // Nombre total d'étapes

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div>
      <div className="progress-bar">
        {/* Ici, vous pouvez ajouter votre logique d'affichage de la barre de progression */}
        Étape {currentStep} sur {totalSteps}
      </div>
      <div className="step-content">
        {/* Ici, vous pouvez ajouter le contenu spécifique à chaque étape */}
        {currentStep === 1 && <div>Contenu de l'étape 1</div>}
        {currentStep === 2 && <div>Contenu de l'étape 2</div>}
        {currentStep === 3 && <div>Contenu de l'étape 3</div>}
      </div>
      <button onClick={prevStep} disabled={currentStep === 1}>Précédent</button>
      <button onClick={nextStep} disabled={currentStep === totalSteps}>Suivant</button>
    </div>
  );
}

export default Checkout;
