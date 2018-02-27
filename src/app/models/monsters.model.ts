import { IDefinition } from "./definition.model";

export interface IWeakness {
  name: string;
  value: number;
}

export interface IWeaknesses {
  form: string;
  elemental: IWeakness[];
  ailments: IWeakness[];
}

export interface IMonster extends IDefinition {
  type: string;
  weaknesses: IWeaknesses[];
}

export const anjanath: IMonster = {
  id: "0",
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
  id: "1",
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
  id: "2",
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
  id: "3",
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
  id: "4",
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
  id: "5",
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
  id: "6",
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
  id: "7",
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
  id: "8",
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
  id: "9",
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
  id: "10",
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
  id: "11",
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
  id: "12",
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
  id: "13",
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
  id: "14",
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
  id: "15",
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
  id: "16",
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
  id: "17",
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
  id: "18",
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
  id: "19",
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
  id: "20",
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
  id: "21",
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
  id: "22",
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
  id: "23",
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
  id: "24",
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
  id: "25",
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
  id: "26",
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
  id: "27",
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
  id: "28",
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
  id: "29",
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
