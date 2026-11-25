export class TextBoxComponent {
  constructor({
    type = 'text',         // 'text' | 'password' | 'email' | 'number' etc.
    value = '',
    placeholder = 'Digite aqui...',
    label = '',            // Rótulo opcional acima do input
    name = '',
    id = '',
    iconLeft = '',         // ex: 'ph ph-envelope'
    iconRight = '',        // ex: 'ph ph-eye-slash'
    disabled = false,
    required = false,
    error = '',            // Mensagem de erro
    className = '',
    data = {},
  } = {}) {
    this.type = type;
    this.value = value;
    this.placeholder = placeholder;
    this.label = label;
    this.name = name;
    this.id = id || (name ? `input-${name}` : '');
    this.iconLeft = iconLeft;
    this.iconRight = iconRight;
    this.disabled = disabled;
    this.required = required;
    this.error = error;
    this.className = className;
    this.data = data;
  }

  render() {
    // Classes para o container principal do input
    const inputClasses = [
      'w-full',
      'justify-start',
      'cursor-text',
      'placeholder:text-gray-400 dark:placeholder:text-gray-500',
      this.iconLeft ? 'pl-10' : '',
      this.iconRight ? 'pr-10' : '',
      this.error ? '!border-red-500 dark:!border-red-500' : '',
      this.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : '',
      this.className,
    ]
      .filter(Boolean)
      .join(' ');

    const dataAttributes = Object.entries(this.data)
      .map(([key, value]) => `data-${key}="${value}"`)
      .join(' ');

    const idAttr = this.id ? `id="${this.id}"` : '';
    const nameAttr = this.name ? `name="${this.name}"` : '';
    const valueAttr = this.value ? `value="${this.value}"` : '';
    const disabledAttr = this.disabled ? 'disabled' : '';
    const requiredAttr = this.required ? 'required' : '';

    return /* html */ `
      <div class="flex flex-col gap-1.5 w-full max-w-4xl text-lg">
        ${
          this.label
            ? `<label class="text-sm font-medium text-gray-700 dark:text-gray-300" ${
                this.id ? `for="${this.id}"` : ''
              }>${this.label}${
                this.required
                  ? ' <span class="text-red-500">*</span>'
                  : ''
              }</label>`
            : ''
        }
        
        <div class="relative flex items-center w-full">
          ${
            this.iconLeft
              ? `<i class="${this.iconLeft} absolute left-3.5 text-gray-500 dark:text-gray-400 text-base pointer-events-none" aria-hidden="true"></i>`
              : ''
          }
          
          <input 
            type="${this.type}"
            class="${inputClasses}"
            placeholder="${this.placeholder}"
            ${idAttr}
            ${nameAttr}
            ${valueAttr}
            ${disabledAttr}
            ${requiredAttr}
            ${dataAttributes}
          />

          ${
            this.iconRight
              ? `<i class="${this.iconRight} absolute right-3.5 text-gray-500 dark:text-gray-400 text-base pointer-events-none" aria-hidden="true"></i>`
              : ''
          }
        </div>

        ${
          this.error
            ? `<span class="text-xs text-red-500 font-medium" role="alert">${this.error}</span>`
            : ''
        }
      </div>
    `;
  }
}