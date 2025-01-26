// function single_plate2_q() {
//     a2_h1 = 1.12*Math.pow((((a2_rho**2)*g*(a2_k**3)*a2_hfg) / (a2_mu*a2_l1*(a2_t_sat - a2_t_wall))) , 0.25);
//     area = a2_l1*a2_w;
//     a2_q1 = a2_h1*area*(a2_t_sat - a2_t_wall);
//     console.log(`for single plate h = ${a2_h1}, q = ${a2_q1}`);
// }
// function double_plate2_q() {
//     a2_h2 = 1,12*Math.pow((((a2_rho**2)*g*(a2_k**3)*a2_hfg) / (a2_mu*a2_l2*(a2_t_sat - a2_t_wall))) , 0.25);
//     area = a2_l2*a2_w;
//     a2_q2 = 2*a2_h2*area*(a2_t_sat - a2_t_wall);
//     console.log(`for double plate h = ${a2_h2}, q = ${a2_q2}`);
// }
// new experiment variables
let a1_l = 1; //m
let a1_w = 0.5; //m
let a1_temp = parseInt((180 + Math.random() * 10).toFixed()); // c
let a1_air_temp = parseInt((10 + Math.random() * 10).toFixed()); // c
let a1_mass_of_plate = 20; //kg
let a1_cp = 400; // j/kg-m
const a1_epsilon = 0.6;
let a1_mu = 23.18e-6;
let a1_pr = 0.688;
const boltzmann_contant = 1.380649e-23; //m2 kg s-2 K-1;
const a1_k = 0.0321;
const g = 9.81; // m/s2
let a1_tmean = 0;
let a1_beta = 0;
let a1_grpr = 0;
let a1_nu = 0;
let a1_h = 0;
let first_sol = 0;
let second_sol = 0;
let third_sol = 0;
let forth_sol = 0;
//# sourceMappingURL=data.js.map