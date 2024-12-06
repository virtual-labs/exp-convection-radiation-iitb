function activity2() {
    let text = `
    <div class='divide'>
    <div style='margin-top: 2vw;'>
        <br>
        <h4 class="center-text fs-20px fw-600"></h4>

        <div class="fs-16px">
        <h5>Introduction to Condensation</h5>
        <p>Learning Objective: Calculate heat transfer Using Mac Adams equation</p>
        </div>

        <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='Verify_act2();' id='temp-btn-20' >Next</button>
    </div>
    </div>
    `;
    maindiv.innerHTML += text;
    setTimeout(() => { MathJax.typeset(); }, 300);
}
//for Verifying first activity
function Verify_act2() {
    let temp_btn = document.getElementById('temp-btn-20');
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text("Sphere", "tb2-box");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-box'>

       <h5>A saturated steam is available at T<sub>sat</sub> = ${a2_t_sat}&deg; C. It is used to condense with the plate having legnth ${a2_l1}m and width ${a2_w}m, maintained at T<sub>w</sub> ${a2_t_wall}&deg; C, find the heat transfered and also find the heat transfer when instead of one plate two plate of lenght ${a2_l2}m and same width as before is used. What will be the heat transfer. Use Nusselt equation.</h5>

        <p>At mean temperature use following properties: 
        K = ${a2_k} w/m-k <br>
        h<sub>fg</sub> = ${a2_hfg} kJ/kg <br>
        &rho; = ${a2_rho} kg/m<sup>3</sup> <br>
        &mu; = 2.89 x 10<sup>-4</sup> N-s/m<sup>2</sup>
        g = ${g} m/s<sup>2</sup>
        </p>
 
        <br>
       
    <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='a2_sol2();'  id='temp-btn-200' >Start</button></div>

    

    </div>

    `;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-box'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
    //internal_calculations();
}
function a2_sol2() {
    let btn_text = get_collapse_btn_text("Single Plate", "tb2-st2");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st2'>


        <p> 
                Single Plate
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h = 1.12 \\left(\\frac{\\rho^2 g k^3 h_{fg} }{\\mu L (T_{sat} - T_w)}\\right)^{\\frac{1}{4}} $$
                </span>
        </p>

        <p> 
                where L = ${a2_l1} meters
        </p>

        <p style='text-align: center;'> 
                h = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp10' /><span id='dsp2-inp10'></span></span> w/m<sup>2</sup>-k
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ Q = hA(T_{sat} - T_w) $$
                </span>
        </p>

        <p> 
                where A = lenght of plate x width = ${a2_l1} x ${a2_w} (m<sup>2</sup>)
        </p>

        <p style='text-align: center;'> 
                Q = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp11' /><span id='dsp2-inp11'></span></span> w
        </p>

        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol2();'  id='temp-btn-22' >Verify</button></div>


    </div>

    `;
    single_plate2_q();
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st2'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol2() {
    let btn = document.getElementById('temp-btn-200');
    console.log(a2_h1, a2_q1);
    let inp1 = document.getElementById('a2-inp10');
    let sp1 = document.getElementById('dsp2-inp10');
    let inp2 = document.getElementById('a2-inp11');
    let sp2 = document.getElementById('dsp2-inp11');
    if (!verify_values(parseFloat(inp1.value), a2_h1)) {
        alert('h is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_q1)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_h1).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_q1).toFixed(4)}`;
    alert('Your entered value is correct!!');
    btn.style.display = 'none';
    a2_sol3();
}
function a2_sol3() {
    let btn_text = get_collapse_btn_text("Two plates", "tb2-st3");
    let text = `
    ${btn_text}
    <div class='collapse divide' style='style='margin-top: 2vw; 'width: 80%; margin: auto;' id='tb2-st3'>


        <p> 
                For two plates
        </p>

        <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$ h = 1.12 \\left(\\frac{\\rho^2 g k^3 h_{fg} }{\\mu L (T_{sat} - T_w)}\\right)^{\\frac{1}{4}} $$
                </span>
        </p>

        <p> 
                where L = ${a2_l2} meters
        </p>

        <p style='text-align: center;'> 
                h = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp20' /><span id='dsp2-inp20'></span></span> w/m<sup></sup>-k
        </p>

         <p style='text-align: center;'> 
                <span style='display: inline-block;' >
                    $$  Q = 2 \\times hA(T_{sat} - T_w) $$
                </span>
        </p>

        <p> 
                where A = new lenght of plate x width = ${a2_l2} x ${a2_w} (m<sup>2</sup>)
        </p>


        <p style='text-align: center;'> 
                R<sub>2</sub> = <span style='display: inline-block;' style='20vw'><input class='form-control' type='text' id='a2-inp21' /><span id='dsp2-inp21'></span></span> w
        </p>


        <br>

         <div style='text-align: center;'><button class='btn btn-info std-btn' onclick='verify2_sol3();'  id='temp-btn-23' >Verify</button></div>


    </div>

    `;
    double_plate2_q();
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => { show_step('tb2-st3'); }, 150);
    setTimeout(() => { MathJax.typeset(); }, 300);
}
function verify2_sol3() {
    let btn = document.getElementById('temp-btn-23');
    console.log(a2_h2, a2_q2);
    let inp1 = document.getElementById('a2-inp20');
    let sp1 = document.getElementById('dsp2-inp20');
    let inp2 = document.getElementById('a2-inp21');
    let sp2 = document.getElementById('dsp2-inp21');
    if (!verify_values(parseFloat(inp1.value), a2_h2)) {
        alert('h is incorrect, calculate again.');
        return;
    }
    if (!verify_values(parseFloat(inp2.value), a2_q2)) {
        alert('Q is incorrect, calculate again.');
        return;
    }
    btn.remove();
    inp1.remove();
    sp1.innerText = `${(a2_h2).toFixed(4)}`;
    inp2.remove();
    sp2.innerText = `${(a2_q2).toFixed(4)}`;
    alert('Your entered value is correct!!');
    alert('Experiment completed');
    btn.style.display = 'none';
}
//# sourceMappingURL=activity2.js.map