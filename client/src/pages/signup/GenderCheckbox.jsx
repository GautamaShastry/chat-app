const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
    return (
        <div className="mt-4">
            <label className="block text-base font-semibold text-gray-200 mb-2">Gender</label>
            <div className="flex gap-6">
                {/* Male Checkbox */}
                <div
                    className={`flex items-center justify-center px-4 py-2 rounded-md shadow-sm border cursor-pointer ${
                        selectedGender === 'male' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 border-gray-300'
                    }`}
                    onClick={() => onCheckboxChange('male')}
                >
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedGender === 'male'}
                        onChange={() => onCheckboxChange('male')}
                    />
                    <label className="text-sm font-medium">{selectedGender === 'male' ? '✓ Male' : 'Male'}</label>
                </div>

                {/* Female Checkbox */}
                <div
                    className={`flex items-center justify-center px-4 py-2 rounded-md shadow-sm border cursor-pointer ${
                        selectedGender === 'female' ? 'bg-blue-500 text-white border-blue-500' : 'bg-gray-100 border-gray-300'
                    }`}
                    onClick={() => onCheckboxChange('female')}
                >
                    <input
                        type="checkbox"
                        className="hidden"
                        checked={selectedGender === 'female'}
                        onChange={() => onCheckboxChange('female')}
                    />
                    <label className="text-sm font-medium">{selectedGender === 'female' ? '✓ Female' : 'Female'}</label>
                </div>
            </div>
        </div>
    );
};

export default GenderCheckbox;
