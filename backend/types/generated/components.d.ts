import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ElementsForm extends Struct.ComponentSchema {
  collectionName: 'components_elements_forms';
  info: {
    description: '';
    displayName: 'Form';
  };
  attributes: {
    buttonSubmit: Schema.Attribute.Component<'molecules.button-link', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    inputForm: Schema.Attribute.Component<'molecules.input', true>;
  };
}

export interface ElementsPricingCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing Card';
  };
  attributes: {
    isFeatured: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.Component<'molecules.button-link', false>;
    planPrice: Schema.Attribute.String;
    planType: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface MoleculesButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_molecules_button_links';
  info: {
    description: '';
    displayName: 'Button Link';
  };
  attributes: {
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['submit', 'button', 'reset', 'menu']>;
    typeStyles: Schema.Attribute.Enumeration<['PRIMERY', 'SECONDARY']>;
  };
}

export interface MoleculesInput extends Struct.ComponentSchema {
  collectionName: 'components_molecules_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    name: Schema.Attribute.String;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.String;
  };
}

export interface SectionsCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    ctaForm: Schema.Attribute.Component<'elements.form', false>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_sections_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    link: Schema.Attribute.Component<'molecules.button-link', false>;
    text: Schema.Attribute.Text;
  };
}

export interface SectionsPrising extends Struct.ComponentSchema {
  collectionName: 'components_sections_prisings';
  info: {
    displayName: 'Prising';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
    prisingCard: Schema.Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface SectionsRow extends Struct.ComponentSchema {
  collectionName: 'components_sections_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface SeoMetaData extends Struct.ComponentSchema {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text;
    metaImage: Schema.Attribute.Media<'images'>;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.card': ElementsCard;
      'elements.form': ElementsForm;
      'elements.pricing-card': ElementsPricingCard;
      'molecules.button-link': MoleculesButtonLink;
      'molecules.input': MoleculesInput;
      'sections.cta': SectionsCta;
      'sections.hero': SectionsHero;
      'sections.prising': SectionsPrising;
      'sections.row': SectionsRow;
      'seo.meta-data': SeoMetaData;
    }
  }
}
