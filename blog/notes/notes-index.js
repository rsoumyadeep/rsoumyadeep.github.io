/* ==========================================================================
   Notes index — the single list of every note shown on /blog/notes.html.

   To add a note:
     1. Put the HTML file in the right category folder under blog/notes/.
     2. Add one entry to NOTES below (path is relative to blog/).
     3. Optionally add these two lines before </body> in the note, so it gets
        the "Home › Notes › Category" bar:
          <script src="../notes-index.js"></script>
          <script src="../notes-nav.js"></script>
   No build step is needed.
   ========================================================================== */
window.NOTES_INDEX = {
  categories: [
    { id: 'reinforcement-learning', title: 'Reinforcement Learning', icon: '📘', blurb: 'MDPs, Bellman equations, dynamic programming, model-free methods, function approximation, policy gradients and offline RL.' },
    { id: 'machine-learning',       title: 'Machine Learning',       icon: '📊', blurb: 'Foundations of machine learning and decision-making under uncertainty.' },
    { id: 'transformers-llms',      title: 'Transformers & LLMs',    icon: '🤖', blurb: 'Transformer architecture and large language models.' },
    { id: 'generative-models',      title: 'Generative Models',      icon: '🎨', blurb: 'Diffusion and other generative modelling approaches.' },
    { id: 'physics',                title: 'Physics',                icon: '🌌', blurb: 'Interactive physics simulations: general relativity and quantum mechanics.' }
  ],

  notes: [
    /* ---------------- Reinforcement Learning ---------------- */
    { title: 'Value Functions, Bellman Equations & HJB', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/bellman-equations.html', legacy: 'bellman.html',
      summary: 'Value functions, Bellman expectation and optimality equations, an animated Bellman backup, and the continuous-time Hamilton–Jacobi–Bellman equation with its derivation.',
      tags: ['Theory', 'MDP', 'Bellman', 'HJB'] },
    { title: 'Dynamic Programming in RL', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/dynamic-programming.html', legacy: 'DP_methods_RL.html',
      summary: 'Bellman equations, contraction mappings, value iteration, policy iteration and generalized policy iteration, with a historical timeline.',
      tags: ['Theory', 'Value Iteration', 'Policy Iteration'] },
    { title: 'Model-Free RL: Monte Carlo & TD Learning', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/model-free-rl.html', legacy: 'model_free_RL.html',
      summary: 'Monte Carlo methods, temporal-difference learning, MC vs. TD, TD control with SARSA and Q-learning, and the stochastic-approximation connection.',
      tags: ['Theory', 'Monte Carlo', 'TD Learning', 'SARSA', 'Q-Learning'] },
    { title: 'Function Approximation in RL', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/function-approximation.html', legacy: 'function_approx_RL.html',
      summary: 'Function classes, value-function approximation, core algorithms, Q-learning with FA, policy gradient, approximate dynamic programming, offline RL, theory and modern advances.',
      tags: ['Theory', 'Function Approximation'] },
    { title: 'Stochastic Approximation for RL', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/stochastic-approximation.html', legacy: 'SA_for_RL.html',
      summary: 'Robbins–Monro, martingale noise, the ODE method and convergence conditions; TD and Q-learning as stochastic approximation; two-timescale methods and where SA breaks.',
      tags: ['Theory', 'Stochastic Approximation', 'Convergence'] },
    { title: 'Policy Gradient Methods & RLHF', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/policy-gradient-and-rlhf.html', legacy: 'policy_gradient_methods_and_RLHF_RL.html',
      summary: 'Policy parameterization, the policy gradient theorem, REINFORCE, variance reduction, the actor–critic connection, advanced policy-gradient methods and RLHF.',
      tags: ['Theory', 'Policy Gradient', 'REINFORCE', 'RLHF'] },
    { title: 'Actor–Critic Methods', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/actor-critic.html', legacy: 'actor_critics_RL.html',
      summary: 'From the variance problem in REINFORCE to baselines, advantage functions, TD critics, A2C and the stochastic-approximation view of actor–critic.',
      tags: ['Theory', 'Actor–Critic', 'A2C'] },
    { title: 'Offline RL — Interactive Guide', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/offline-rl-interactive-guide.html', legacy: 'offline-rl.html',
      summary: 'Longer interactive guide: history, problem setup, core challenges, algorithms, theory, practical considerations, limitations and modern research directions.',
      tags: ['Interactive', 'Interactive guide', 'Offline RL'], variant: 'Interactive guide — the longer, illustrated treatment' },
    { title: 'Offline RL — Research Notes', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/offline-rl-research-notes.html', legacy: 'offline-rl(odd).html',
      summary: 'Shorter research-style write-up: formal setup, objective, distribution shift, extrapolation error, error decomposition, concentrability and algorithmic approaches.',
      tags: ['Research notes', 'Theory', 'Offline RL'], variant: 'Research notes — a compact, equation-focused write-up' },
    { title: 'Q-Learning & Stochastic Approximation Visualizer', category: 'reinforcement-learning',
      path: 'notes/reinforcement-learning/q-learning-visualizer.html', legacy: 'Q_learning_animation.html',
      summary: 'Q-learning on a 5×5 gridworld with playback, hyperparameters and training statistics, showing convergence, stochastic noise and why Q-learning is a stochastic approximation.',
      tags: ['Interactive', 'Simulator', 'Q-Learning'] },

    /* ---------------- Machine Learning ---------------- */
    { title: 'ML Concept Map', category: 'machine-learning',
      path: 'notes/machine-learning/ml-concept-map.html', legacy: 'ML/ml_map.html',
      summary: 'A map of machine learning from statistical foundations to modern deep learning — with theory, intuition and mathematics.',
      tags: ['Concept map', 'Theory'] },
    { title: 'Decision Theory in Machine Learning', category: 'machine-learning',
      path: 'notes/machine-learning/decision-theory.html', legacy: 'ML/decision_theory.html',
      summary: 'From optimal decisions under uncertainty to the mathematical backbone of learning algorithms, with a historical timeline.',
      tags: ['Theory', 'Decision Theory'] },

    /* ---------------- Transformers & LLMs ---------------- */
    { title: 'Transformer Forward Pass — Interactive Simulator', category: 'transformers-llms',
      path: 'notes/transformers-llms/transformer-forward-pass.html', legacy: 'transformer_animated.html',
      summary: 'Step through a Transformer forward pass: embeddings and positional encoding, multi-head attention, residual connections and LayerNorm, with configurable controls.',
      tags: ['Interactive', 'Simulator', 'Transformer', 'Attention'] },

    /* ---------------- Generative Models ---------------- */
    { title: 'Diffusion Models — Interactive Simulator', category: 'generative-models',
      path: 'notes/generative-models/diffusion-simulator.html', legacy: 'diffusion_simulator.html',
      summary: 'Visualize a diffusion model with an adjustable noise schedule, parameters and live statistics.',
      tags: ['Interactive', 'Simulator', 'Diffusion'] },

    /* ---------------- Physics ---------------- */
    { title: 'Black-Hole Merger — Browser/Synthesized Audio', category: 'physics',
      path: 'notes/physics/black-hole-merger-synthesized-audio.html', legacy: 'black_hole_merger.html',
      summary: 'Interactive 3D simulation of a binary black-hole merger. The gravitational-wave chirp is synthesized in the browser (Web Audio), so it needs no external sound files.',
      tags: ['Interactive', 'Simulator', 'General Relativity', 'Browser audio'], variant: 'Audio generated in the browser' },
    { title: 'Black-Hole Merger — External Audio Version', category: 'physics',
      path: 'notes/physics/black-hole-merger-external-audio.html', legacy: 'Physics/General Relativity/black_merging_in_GTR.html',
      summary: 'The same interactive merger simulation, but with chirp and merger sounds loaded from external audio files instead of synthesized audio.',
      tags: ['Interactive', 'Simulator', 'General Relativity', 'External audio'], variant: 'Audio loaded from external sound files' },
    { title: 'Schrödinger Equation — 1D Real-Time Simulator', category: 'physics',
      path: 'notes/physics/schrodinger-1d-simulator.html', legacy: 'schrodinger_equation.html',
      summary: 'Real-time simulation of the 1D time-dependent Schrödinger equation using a split-step Fourier (FFT) method.',
      tags: ['Interactive', 'Simulator', 'Quantum Mechanics'] }
  ]
};
