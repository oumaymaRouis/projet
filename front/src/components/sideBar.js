import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/sideBar.css";

const options1 = [
  { label: "Gaming", value: 1 },
  { label: "Performance", value: 2 },
  { label: "Basic", value: 3 },
  { label: "Mac", value: 4 },
];

const options2 = [
  { label: "500 TND - 1000TND", value: "option1" },
  { label: "1000 TND - 2000TND", value: "option2" },
  { label: "2100 TND - 3000 TND", value: "option3" },
  { label: "3100 TND - 5000 TND", value: "option4" },
  { label: "5100 TND - 7000 TND", value: "option5" },
  { label: "+7000", value: "option6" },
];

const SideBar = ({ categoryId, onChangeCat, showMultiSelect }) => {
  const [selectedOptions, setSelectedOptions] = useState(categoryId);
  const [selectedSalary, setSelectedSalary] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isSalaryOpen, setIsSalaryOpen] = useState(false);
  console.log(selectedOptions);

  const handleOptionChange = (optionValue, isSelected) => {
    if (isSelected) {
      console.log(optionValue);
      onChangeCat(optionValue);
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((option) => option !== optionValue)
      );
    }
  };

  const handleSalaryChange = (optionValue, isSelected) => {
    if (isSelected) {
      setSelectedSalary([...selectedSalary, optionValue]);
    } else {
      setSelectedSalary(
        selectedSalary.filter((option) => option !== optionValue)
      );
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSalaryDropdown = () => {
    setIsSalaryOpen(!isSalaryOpen);
  };

  return (
    <div className="sidebar-container">
      <div className="job-alert-container">
        <p className="joinning">
          Join our newsletter <br></br> <br></br> Join our newsletter for
          updated to the system
        </p>
        <div className="input-newsletter-container">
          <input
            className="input-newsletter"
            placeholder="Type Your Email"
          ></input>
        </div>
        <br></br>
        <div className="activate-button-container">
          <button className="activate-button">Activate</button>
        </div>
      </div>
      {showMultiSelect && (
        <div className="multiselect-dropdown">
          <div className="categorie">
            <button className="categorie-button" onClick={toggleDropdown}>
              Categorie
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {isOpen && (
              <div className="dropdown-options1">
                {options1.map((option) => (
                  <label key={option.value} className="container">
                    <input
                      name="cat"
                      type="radio"
                      value={option.value}
                      checked={selectedOptions.includes(option.value)}
                      onChange={(e) =>
                        handleOptionChange(option.value, e.target.checked)
                      }
                    />
                    <span class="checkmark"></span>

                    {option.label}

                    <span className="checkbox-number">23</span>
                  </label>
                ))}
              </div>
            )}
          </div>
          <div className="salary">
            <button className="salary-button" onClick={toggleSalaryDropdown}>
              Salary
              <FontAwesomeIcon icon={faChevronDown} />
            </button>

            {isSalaryOpen && (
              <div className="dropdown-options2">
                {options2.map((option) => (
                  <label key={option.value} className="container">
                    <input
                      type="checkbox"
                      value={option.value}
                      checked={selectedSalary.includes(option.value)}
                      onChange={(e) =>
                        handleSalaryChange(option.value, e.target.checked)
                      }
                    />
                    <span class="checkmark"></span>
                    {option.label}
                    <span className="checkbox-number">23</span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
      ;
    </div>
  );
};

export default SideBar;
