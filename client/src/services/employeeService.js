export const getDepartmentCollection = () => [
  { id: "1", title: "Development" },
  { id: "2", title: "Marketing" },
  { id: "3", title: "Accounting" },
  { id: "4", title: "HR" },
];

export const genderItems = [
  {
    id: "male",
    title: "Male",
  },
  {
    id: "female",
    title: "Female",
  },
  {
    id: "other",
    title: "Other",
  },
];

export const initialFValue = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "female",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};
