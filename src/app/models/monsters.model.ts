export interface IWeakness {
  name: string;
  value: number;
}

export interface IWeaknesses {
  form: string;
  elemental: IWeakness[];
  ailments: IWeakness[];
}

export interface IMonster {
  name: string;
  description: string;
  img: string;
  type: string;
  weaknesses: IWeaknesses[];
}

export const anjanath: IMonster = {
  name: "Anjanath",
  description: "",
  img: "assets/images/MHW-Anjanath_Icon.png",
  type: "Brute Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const azureRathalos: IMonster = {
  name: "Azure Rathalos",
  description: "",
  img: "assets/images/MHW-Azure_Rathalos_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const barroth: IMonster = {
  name: "Barroth",
  description: "",
  img: "assets/images/MHW-Barroth_Icon.png",
  type: "Brute Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 3 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 0 }
      ],
      ailments: [
        { name: "Blast", value: 3 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    },
    {
      form: "Mud",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const bazelgeuse: IMonster = {
  name: "Bazelgeuse",
  description: "",
  img: "assets/images/MHW-Bazelgeuse_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const blackDiablos: IMonster = {
  name: "Black Diablos",
  description: "",
  img: "assets/images/MHW-Black_Diablos_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 0 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const diablos: IMonster = {
  name: "Diablos",
  description: "",
  img: "assets/images/MHW-Diablos_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const dodogama: IMonster = {
  name: "Dodogama",
  description: "",
  img: "assets/images/MHW-Dodogama_Icon.png",
  type: "Fanged Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const greatGirros: IMonster = {
  name: "Great Girros",
  description: "",
  img: "assets/images/MHW-Great_Girros_Icon.png",
  type: "Fanged Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 1 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 3 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const greatJagras: IMonster = {
  name: "Great Jagras",
  description: "",
  img: "assets/images/MHW-Great_Jagras_Icon.png",
  type: "Fanged Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 3 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 0 }
      ],
      ailments: [
        { name: "Blast", value: 3 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 3 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const jyuratodus: IMonster = {
  name: "Jyuratodus",
  description: "",
  img: "assets/images/MHW-Jyuratodus_Icon.png",
  type: "Piscine Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 0 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 3 }
      ]
    },
    {
      form: "Mud",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const kirin: IMonster = {
  name: "Kirin",
  description: "",
  img: "assets/images/MHW-Kirin_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 3 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 0 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const kuluYaKu: IMonster = {
  name: "Kulu-Ya-Ku",
  description: "",
  img: "assets/images/MHW-Kulu-Ya-Ku_Icon.png",
  type: "Bird Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const kushalaDaora: IMonster = {
  name: "Kushala Daora",
  description: "",
  img: "assets/images/MHW-Kushala_Daora_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 0 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 0 }
      ],
      ailments: [
        { name: "Blast", value: 3 },
        { name: "Paralysis", value: 1 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const lavasioth: IMonster = {
  name: "Lavasioth",
  description: "",
  img: "assets/images/MHW-Lavasioth_Icon.png",
  type: "Piscine Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 1 }
      ]
    },
    {
      form: "Hard",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 0 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const legiana: IMonster = {
  name: "Legiana",
  description: "",
  img: "assets/images/MHW-Legiana_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 0 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const nergigante: IMonster = {
  name: "Nergigante",
  description: "",
  img: "assets/images/MHW-Nergigante_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const odogaron: IMonster = {
  name: "Odogaron",
  description: "",
  img: "assets/images/MHW-Odogaron_Icon.png",
  type: "Fanged Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 0 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 3 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const paolumu: IMonster = {
  name: "Paolumu",
  description: "",
  img: "assets/images/MHW-Paolumu_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 3 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 0 }
      ],
      ailments: [
        { name: "Blast", value: 3 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const pinkRathian: IMonster = {
  name: "Pink Rathian",
  description: "",
  img: "assets/images/MHW-Pink_Rathian_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const pukeiPukei: IMonster = {
  name: "Pukei-Pukei",
  description: "",
  img: "assets/images/MHW-Pukei-Pukei_Icon.png",
  type: "Bird Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const radobaan: IMonster = {
  name: "Radobaan",
  description: "",
  img: "assets/images/MHW-Radobaan_Icon.png",
  type: "Brute Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 1 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 3 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const rathalos: IMonster = {
  name: "Rathalos",
  description: "",
  img: "assets/images/MHW-Rathalos_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const rathian: IMonster = {
  name: "Rathian",
  description: "",
  img: "assets/images/MHW-Rathian_Icon.png",
  type: "Flying Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 1 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 1 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const teostra: IMonster = {
  name: "Teostra",
  description: "",
  img: "assets/images/MHW-Teostra_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 1 },
        { name: "Paralysis", value: 1 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const tobiKadachi: IMonster = {
  name: "Tobi-Kadachi",
  description: "",
  img: "assets/images/MHW-Tobi-Kadachi_Icon.png",
  type: "Fanged Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 1 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 0 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const tzitziYaKu: IMonster = {
  name: "Tzitzi-Ya-Ku",
  description: "",
  img: "assets/images/MHW-Tzitzi-Ya-Ku_Icon.png",
  type: "Bird Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 3 },
        { name: "Thunder", value: 3 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 2 },
        { name: "Sleep", value: 2 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const uragaan: IMonster = {
  name: "Uragaan",
  description: "",
  img: "assets/images/MHW-Uragaan_Icon.png",
  type: "Brute Wyvern",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 2 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 3 }
      ]
    }
  ]
};

export const vaalHazak: IMonster = {
  name: "Vaal Hazak",
  description: "",
  img: "assets/images/MHW-Vaal_Hazak_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 3 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 0 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 1 },
        { name: "Poison", value: 1 },
        { name: "Sleep", value: 1 },
        { name: "Stun", value: 2 }
      ]
    }
  ]
};

export const xenoJiiva: IMonster = {
  name: "Xeno'jiiva",
  description: "",
  img: "assets/images/MHW-Xeno-jiiva_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 2 },
        { name: "Fire", value: 2 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 2 },
        { name: "Water", value: 2 }
      ],
      ailments: [
        { name: "Blast", value: 2 },
        { name: "Paralysis", value: 1 },
        { name: "Poison", value: 3 },
        { name: "Sleep", value: 0 },
        { name: "Stun", value: 1 }
      ]
    }
  ]
};

export const zorahMagdaros: IMonster = {
  name: "Zorah Magdaros",
  description: "",
  img: "assets/images/MHW-Zorah_Magdaros_Icon.png",
  type: "Elder Dragon",
  weaknesses: [
    {
      form: "Normal",
      elemental: [
        { name: "Dragon", value: 3 },
        { name: "Fire", value: 0 },
        { name: "Ice", value: 2 },
        { name: "Thunder", value: 1 },
        { name: "Water", value: 3 }
      ],
      ailments: [
        { name: "Blast", value: 0 },
        { name: "Paralysis", value: 0 },
        { name: "Poison", value: 0 },
        { name: "Sleep", value: 0 },
        { name: "Stun", value: 0 }
      ]
    }
  ]
};

export const allMonsters: IMonster[] = [
  anjanath,
  azureRathalos,
  barroth,
  bazelgeuse,
  blackDiablos,
  diablos,
  dodogama,
  greatGirros,
  greatJagras,
  jyuratodus,
  kirin,
  kuluYaKu,
  kushalaDaora,
  lavasioth,
  legiana,
  nergigante,
  odogaron,
  paolumu,
  pinkRathian,
  pukeiPukei,
  radobaan,
  rathalos,
  rathian,
  teostra,
  tobiKadachi,
  tzitziYaKu,
  uragaan,
  vaalHazak,
  xenoJiiva,
  zorahMagdaros
];
