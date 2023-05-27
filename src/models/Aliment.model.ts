import { Schema, model } from 'mongoose';

export interface IAliment extends Document {
  name: string;
  description: string;
  source: string;
  characteristics: string;
  benefits: string;
  recommendations: string;
  price: number;
  image: string;
  category: string;
  createdAt: Date;
  updatedAt: Date;
  canBeReplacedBy: {
    value: string;
    label: string;
  }[];
}

const AlimentsSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
  },
  source: {
    type: String,
  },
  characteristics: {
    type: String,
  },
  benefits: {
    type: String,
  },
  recommendations: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  portionType: {
    type: String,
  },
  portionSize: {
    type: Number,
  },
  calories: {
    type: Number,
  },
  carbohydrates: {
    type: Number,
  },
  fats: {
    type: Number,
  },
  proteins: {
    type: Number,
  },
  sugars: {
    type: {
      value: String,
      label: String,
    },
  },
  sodium: {
    type: {
      value: String,
      label: String,
    },
  },
  fiber: {
    type: {
      value: String,
      label: String,
    },
  },
  calcium: {
    type: {
      value: String,
      label: String,
    },
  },
  iron: {
    type: {
      value: String,
      label: String,
    },
  },
  potassium: {
    type: {
      value: String,
      label: String,
    },
  },
  magnesium: {
    type: {
      value: String,
      label: String,
    },
  },
  zinc: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminA: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminB3: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminB6: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminB12: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminC: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminD: {
    type: {
      value: String,
      label: String,
    },
  },
  vitaminE: {
    type: {
      value: String,
      label: String,
    },
  },
  VIT_A_eq_RAE: {
    type: {
      value: String,
      label: String,
    },
  },
  FAT_MONO: {
    type: {
      value: String,
      label: String,
    },
  },
  FAT_POLY: {
    type: {
      value: String,
      label: String,
    },
  },
  FAT_SAT: {
    type: {
      value: String,
      label: String,
    },
  },
  ACID_FOLIC: {
    type: {
      value: String,
      label: String,
    },
  },
  canBeReplacedBy: {
    type: Array,
  },
  listOfReplacements: {
    type: Array,
  },
  forbiddenFor: {
    type: Array,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

export default model<IAliment>('Aliment', AlimentsSchema);
