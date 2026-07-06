/* @ds-bundle: {"format":3,"namespace":"CubeCraftCreationsDesignSystem_0c419c","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"CategoryCard","sourcePath":"components/product/CategoryCard.jsx"},{"name":"ProductCard","sourcePath":"components/product/ProductCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"eefcaedfbeea","components/core/Button.jsx":"0eb42e02c6a7","components/core/Tag.jsx":"782d692151ad","components/product/CategoryCard.jsx":"dfd98900f67f","components/product/ProductCard.jsx":"b08c05b76a55","ui_kits/storefront/CartDrawer.jsx":"c712060e601b","ui_kits/storefront/Header.jsx":"9ef823c5a991","ui_kits/storefront/HomePage.jsx":"bc8a40adc9f7","ui_kits/storefront/ProductDetailPage.jsx":"32e235afbc57","ui_kits/storefront/ShopPage.jsx":"6ec746ad6888"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CubeCraftCreationsDesignSystem_0c419c = window.CubeCraftCreationsDesignSystem_0c419c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * CubeCraft Creations — Badge
 * Compact status indicator. Use for "New", "Sale", category tags, order status.
 */
function Badge({
  children,
  variant = 'brand',
  size = 'md',
  dot = false
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 700,
    borderRadius: '9999px',
    lineHeight: 1,
    whiteSpace: 'nowrap'
  };
  const sizes = {
    sm: {
      padding: '3px 8px',
      fontSize: '10px',
      letterSpacing: '0.06em'
    },
    md: {
      padding: '4px 10px',
      fontSize: '11px',
      letterSpacing: '0.05em'
    },
    lg: {
      padding: '5px 12px',
      fontSize: '12px',
      letterSpacing: '0.04em'
    }
  };
  const variants = {
    brand: {
      background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
      color: '#fff'
    },
    blue: {
      background: '#EBEBF8',
      color: '#3B3AB8'
    },
    purple: {
      background: '#F6EAFD',
      color: '#A035CC'
    },
    neutral: {
      background: '#F4F4F6',
      color: '#52525E'
    },
    success: {
      background: '#DCFCE7',
      color: '#16A34A'
    },
    warning: {
      background: '#FEF3C7',
      color: '#D97706'
    },
    error: {
      background: '#FEE2E2',
      color: '#DC2626'
    },
    dark: {
      background: '#18181D',
      color: '#fff'
    },
    outline: {
      background: 'transparent',
      color: '#3B3AB8',
      border: '1.5px solid #3B3AB8'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    textTransform: 'uppercase'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: size === 'sm' ? 5 : 6,
      height: size === 'sm' ? 5 : 6,
      borderRadius: '50%',
      background: 'currentColor',
      flexShrink: 0,
      opacity: 0.85
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CubeCraft Creations — Button
 * Primary interactive element. Supports gradient, solid, outline, and ghost variants.
 */
function Button({
  children,
  variant = 'gradient',
  size = 'md',
  disabled = false,
  fullWidth = false,
  icon = null,
  iconPosition = 'left',
  onClick,
  type = 'button',
  href,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '6px',
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 700,
    letterSpacing: '0.02em',
    borderRadius: '9999px',
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    transition: 'all 200ms cubic-bezier(0,0,0.2,1)',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    width: fullWidth ? '100%' : undefined,
    lineHeight: 1
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: '13px'
    },
    md: {
      padding: '11px 22px',
      fontSize: '14px'
    },
    lg: {
      padding: '14px 28px',
      fontSize: '16px'
    },
    xl: {
      padding: '17px 36px',
      fontSize: '18px'
    }
  };
  const variants = {
    gradient: {
      background: 'linear-gradient(135deg, #3B3AB8 0%, #A035CC 100%)',
      color: '#ffffff',
      boxShadow: '0 4px 20px rgba(59,58,184,0.25)'
    },
    primary: {
      background: '#3B3AB8',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(59,58,184,0.20)'
    },
    secondary: {
      background: '#F4F4F6',
      color: '#18181D',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      color: '#3B3AB8',
      border: '2px solid #3B3AB8',
      boxShadow: 'none'
    },
    ghost: {
      background: 'transparent',
      color: '#3B3AB8',
      boxShadow: 'none'
    },
    danger: {
      background: '#DC2626',
      color: '#ffffff',
      boxShadow: '0 2px 8px rgba(220,38,38,0.20)'
    }
  };
  const style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, icon && iconPosition === 'left' && icon, children, icon && iconPosition === 'right' && icon);
  const handleMouseEnter = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'scale(1.03)';
    e.currentTarget.style.filter = 'brightness(1.08)';
  };
  const handleMouseLeave = e => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.filter = 'brightness(1)';
  };
  const handleMouseDown = e => {
    if (disabled) return;
    e.currentTarget.style.transform = 'scale(0.97)';
  };
  const handleMouseUp = e => {
    e.currentTarget.style.transform = 'scale(1.03)';
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      onMouseDown: handleMouseDown,
      onMouseUp: handleMouseUp
    }, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    onMouseDown: handleMouseDown,
    onMouseUp: handleMouseUp
  }, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
/**
 * CubeCraft Creations — Tag
 * Soft pill for content categorization (product categories, filter chips, skill tags).
 */
function Tag({
  children,
  active = false,
  onClick,
  onRemove,
  color = 'default'
}) {
  const isInteractive = !!onClick;
  const colors = {
    default: {
      bg: active ? '#EBEBF8' : '#F4F4F6',
      text: active ? '#3B3AB8' : '#52525E',
      border: active ? '#CDCDF0' : '#E4E4EA'
    },
    blue: {
      bg: '#EBEBF8',
      text: '#3B3AB8',
      border: '#CDCDF0'
    },
    purple: {
      bg: '#F6EAFD',
      text: '#A035CC',
      border: '#E8CBFA'
    },
    green: {
      bg: '#DCFCE7',
      text: '#16A34A',
      border: '#BBF7D0'
    },
    orange: {
      bg: '#FEF3C7',
      text: '#D97706',
      border: '#FDE68A'
    }
  };
  const c = colors[color] || colors.default;
  const style = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '5px',
    padding: '5px 12px',
    borderRadius: '9999px',
    background: c.bg,
    color: c.text,
    border: `1px solid ${c.border}`,
    fontFamily: "'Nunito', system-ui, sans-serif",
    fontWeight: 600,
    fontSize: '13px',
    cursor: isInteractive ? 'pointer' : 'default',
    transition: 'all 150ms ease-out',
    userSelect: 'none',
    lineHeight: 1.3
  };
  return /*#__PURE__*/React.createElement("span", {
    style: style,
    onClick: onClick,
    onMouseEnter: isInteractive ? e => {
      e.currentTarget.style.filter = 'brightness(0.95)';
    } : undefined,
    onMouseLeave: isInteractive ? e => {
      e.currentTarget.style.filter = 'brightness(1)';
    } : undefined
  }, children, onRemove && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      marginLeft: 2,
      opacity: 0.6,
      cursor: 'pointer',
      fontSize: '14px',
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/product/CategoryCard.jsx
try { (() => {
/**
 * CubeCraft Creations — CategoryCard
 * Full-width feature card for homepage category sections.
 */
function CategoryCard({
  image,
  title,
  description,
  ctaLabel = 'Shop now',
  href = '#',
  align = 'left',
  badge
}) {
  const [hovered, setHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'flex',
      flexDirection: align === 'right' ? 'row-reverse' : 'row',
      borderRadius: '20px',
      overflow: 'hidden',
      border: '1px solid #E4E4EA',
      background: '#fff',
      textDecoration: 'none',
      fontFamily: "'Nunito', system-ui, sans-serif",
      transition: 'all 220ms cubic-bezier(0,0,0.2,1)',
      boxShadow: hovered ? '0 8px 32px rgba(0,0,0,0.12)' : '0 2px 8px rgba(0,0,0,0.06)',
      transform: hovered ? 'translateY(-2px)' : 'none',
      minHeight: '240px'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 45%',
      overflow: 'hidden',
      position: 'relative'
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 400ms cubic-bezier(0.34,1.56,0.64,1)',
      transform: hovered ? 'scale(1.05)' : 'scale(1)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      padding: '36px 40px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: '12px'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignSelf: 'flex-start',
      background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
      color: '#fff',
      padding: '3px 10px',
      borderRadius: '9999px',
      fontSize: '10px',
      fontWeight: 800,
      letterSpacing: '0.07em',
      textTransform: 'uppercase'
    }
  }, badge), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '30px',
      fontWeight: 800,
      color: '#18181D',
      lineHeight: 1.2,
      letterSpacing: '-0.01em'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      fontWeight: 400,
      color: '#52525E',
      lineHeight: 1.6
    }
  }, description), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '10px 22px',
      borderRadius: '9999px',
      background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
      color: '#fff',
      fontWeight: 700,
      fontSize: '14px',
      letterSpacing: '0.02em',
      boxShadow: '0 4px 16px rgba(59,58,184,0.25)'
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { CategoryCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/CategoryCard.jsx", error: String((e && e.message) || e) }); }

// components/product/ProductCard.jsx
try { (() => {
/**
 * CubeCraft Creations — ProductCard
 * Standard product grid card for shop listings.
 */
function ProductCard({
  image,
  name,
  price,
  originalPrice,
  badge,
  category,
  onAddToCart,
  onWishlist,
  wishlisted = false,
  href = '#'
}) {
  const [hovered, setHovered] = React.useState(false);
  const [imgHovered, setImgHovered] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: '16px',
      border: '1px solid #E4E4EA',
      overflow: 'hidden',
      transition: 'all 220ms cubic-bezier(0,0,0.2,1)',
      boxShadow: hovered ? '0 8px 24px rgba(0,0,0,0.12)' : '0 2px 6px rgba(0,0,0,0.06)',
      transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: "'Nunito', system-ui, sans-serif",
      cursor: 'pointer'
    },
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false)
  }, /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: 'block',
      position: 'relative',
      aspectRatio: '1',
      overflow: 'hidden',
      background: '#F4F4F6',
      textDecoration: 'none'
    },
    onMouseEnter: () => setImgHovered(true),
    onMouseLeave: () => setImgHovered(false)
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 350ms cubic-bezier(0.34,1.56,0.64,1)',
      transform: imgHovered ? 'scale(1.06)' : 'scale(1)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 10,
      left: 10,
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap'
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
      color: '#fff',
      padding: '3px 9px',
      borderRadius: '9999px',
      fontSize: '10px',
      fontWeight: 800,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      boxShadow: '0 2px 8px rgba(59,58,184,0.3)'
    }
  }, badge)), onWishlist && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.preventDefault();
      e.stopPropagation();
      onWishlist();
    },
    style: {
      position: 'absolute',
      top: 8,
      right: 8,
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.9)',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '15px',
      transition: 'all 150ms ease-out',
      backdropFilter: 'blur(4px)'
    }
  }, wishlisted ? '♥' : '♡')), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px 16px',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      flex: 1
    }
  }, category && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '10px',
      fontWeight: 700,
      letterSpacing: '0.07em',
      textTransform: 'uppercase',
      color: '#A035CC'
    }
  }, category), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      fontWeight: 700,
      fontSize: '15px',
      color: '#18181D',
      textDecoration: 'none',
      lineHeight: 1.3
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 800,
      fontSize: '17px',
      color: '#3B3AB8'
    }
  }, "$", price), originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: '13px',
      color: '#9898A8',
      textDecoration: 'line-through'
    }
  }, "$", originalPrice)), onAddToCart && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onAddToCart();
    },
    style: {
      marginTop: 8,
      padding: '9px 16px',
      borderRadius: '9999px',
      background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
      color: '#fff',
      border: 'none',
      fontFamily: "'Nunito', system-ui, sans-serif",
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '0.02em',
      cursor: 'pointer',
      transition: 'all 200ms ease-out',
      boxShadow: '0 4px 14px rgba(59,58,184,0.22)'
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.08)';
      e.currentTarget.style.transform = 'scale(1.02)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'brightness(1)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, "Add to cart")));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/product/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/CartDrawer.jsx
try { (() => {
// CubeCraft Creations — Cart Drawer

Object.assign(window, {
  CartDrawer: function CartDrawer({
    open,
    onClose,
    cartItems,
    onRemove
  }) {
    const {
      Button
    } = window.CubeCraft;
    const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price) * item.qty, 0);
    return React.createElement(React.Fragment, null,
    // Overlay
    open && React.createElement('div', {
      onClick: onClose,
      style: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(9,9,11,0.5)',
        zIndex: 300,
        transition: 'opacity 200ms ease-out'
      }
    }),
    // Drawer
    React.createElement('div', {
      style: {
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: 400,
        background: '#fff',
        zIndex: 400,
        boxShadow: '-8px 0 40px rgba(0,0,0,0.15)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 300ms cubic-bezier(0.34,1.56,0.64,1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: "'Nunito', system-ui, sans-serif"
      }
    },
    // Header
    React.createElement('div', {
      style: {
        padding: '24px 24px 20px',
        borderBottom: '1px solid #E4E4EA',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    }, React.createElement('div', {
      style: {
        fontWeight: 800,
        fontSize: 20,
        color: '#18181D'
      }
    }, `Cart (${cartItems.reduce((s, i) => s + i.qty, 0)})`), React.createElement('button', {
      onClick: onClose,
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: '#F4F4F6',
        border: 'none',
        cursor: 'pointer',
        fontSize: 18,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#52525E'
      }
    }, '×')),
    // Items
    React.createElement('div', {
      style: {
        flex: 1,
        overflowY: 'auto',
        padding: '16px 24px'
      }
    }, cartItems.length === 0 ? React.createElement('div', {
      style: {
        textAlign: 'center',
        padding: '60px 20px',
        color: '#9898A8'
      }
    }, React.createElement('div', {
      style: {
        fontSize: 40,
        marginBottom: 12
      }
    }, '🛒'), React.createElement('div', {
      style: {
        fontWeight: 700,
        fontSize: 16
      }
    }, 'Your cart is empty'), React.createElement('div', {
      style: {
        fontSize: 14,
        marginTop: 4
      }
    }, 'Add something handcrafted and lovely!')) : cartItems.map((item, i) => React.createElement('div', {
      key: i,
      style: {
        display: 'flex',
        gap: 14,
        padding: '16px 0',
        borderBottom: '1px solid #F4F4F6',
        alignItems: 'center'
      }
    }, React.createElement('div', {
      style: {
        width: 64,
        height: 64,
        borderRadius: 12,
        overflow: 'hidden',
        background: '#F4F4F6',
        flexShrink: 0
      }
    }, item.image && React.createElement('img', {
      src: item.image,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })), React.createElement('div', {
      style: {
        flex: 1
      }
    }, React.createElement('div', {
      style: {
        fontWeight: 700,
        fontSize: 14,
        color: '#18181D',
        marginBottom: 2
      }
    }, item.name), React.createElement('div', {
      style: {
        fontSize: 12,
        color: '#A035CC',
        fontWeight: 700
      }
    }, item.category), React.createElement('div', {
      style: {
        fontWeight: 800,
        fontSize: 15,
        color: '#3B3AB8',
        marginTop: 4
      }
    }, `$${item.price} × ${item.qty}`)), React.createElement('button', {
      onClick: () => onRemove(i),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#9898A8',
        fontSize: 18,
        padding: 4
      }
    }, '×')))),
    // Footer
    cartItems.length > 0 && React.createElement('div', {
      style: {
        padding: '20px 24px',
        borderTop: '1px solid #E4E4EA'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 16,
        fontWeight: 800,
        fontSize: 18
      }
    }, React.createElement('span', {
      style: {
        color: '#18181D'
      }
    }, 'Total'), React.createElement('span', {
      style: {
        color: '#3B3AB8'
      }
    }, `$${total.toFixed(2)}`)), React.createElement(Button, {
      variant: 'gradient',
      size: 'lg',
      fullWidth: true
    }, 'Checkout'), React.createElement('div', {
      style: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 12,
        color: '#9898A8',
        fontWeight: 600
      }
    }, 'Free shipping on orders over $50'))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/Header.jsx
try { (() => {
// CubeCraft Creations — Storefront Header
// Nav bar with logo, links, cart, and search

Object.assign(window, {
  StorefrontHeader: function StorefrontHeader({
    page,
    setPage,
    cartCount,
    onCartOpen
  }) {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const navLinks = [{
      label: 'Shop All',
      key: 'shop'
    }, {
      label: '3D Prints',
      key: 'shop',
      filter: '3D Prints'
    }, {
      label: 'Crochet',
      key: 'shop',
      filter: 'Crochet'
    }, {
      label: 'Apparel',
      key: 'shop',
      filter: 'Apparel'
    }];
    const headerStyle = {
      position: 'sticky',
      top: 0,
      zIndex: 200,
      background: 'rgba(255,255,255,0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #E4E4EA',
      fontFamily: "'Nunito', system-ui, sans-serif"
    };
    return React.createElement('header', {
      style: headerStyle
    }, React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px',
        height: 68,
        display: 'flex',
        alignItems: 'center',
        gap: 32
      }
    },
    // Logo
    React.createElement('img', {
      src: '../../assets/logos/Header_Logo.png',
      alt: 'CubeCraft Creations',
      style: {
        height: 40,
        cursor: 'pointer',
        flexShrink: 0
      },
      onClick: () => setPage({
        key: 'home'
      })
    }),
    // Nav links
    React.createElement('nav', {
      style: {
        display: 'flex',
        gap: 4,
        flex: 1
      }
    }, navLinks.map((link, i) => React.createElement('button', {
      key: i,
      onClick: () => setPage({
        key: link.key,
        filter: link.filter
      }),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Nunito', system-ui, sans-serif",
        fontWeight: 600,
        fontSize: 15,
        color: page.key === link.key ? '#3B3AB8' : '#52525E',
        padding: '6px 14px',
        borderRadius: 9999,
        transition: 'all 150ms ease-out'
      },
      onMouseEnter: e => {
        e.currentTarget.style.background = '#F4F4F6';
        e.currentTarget.style.color = '#3B3AB8';
      },
      onMouseLeave: e => {
        e.currentTarget.style.background = 'none';
        e.currentTarget.style.color = page.key === link.key ? '#3B3AB8' : '#52525E';
      }
    }, link.label))),
    // Actions
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    },
    // Search
    React.createElement('button', {
      style: {
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'none',
        border: '1px solid #E4E4EA',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16
      }
    }, '🔍'),
    // Cart
    React.createElement('button', {
      onClick: onCartOpen,
      style: {
        position: 'relative',
        width: 38,
        height: 38,
        borderRadius: '50%',
        background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 16,
        color: '#fff'
      }
    }, '🛒', cartCount > 0 && React.createElement('span', {
      style: {
        position: 'absolute',
        top: -4,
        right: -4,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: '#DC2626',
        color: '#fff',
        fontSize: 10,
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        border: '2px solid #fff'
      }
    }, cartCount)))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/HomePage.jsx
try { (() => {
// CubeCraft Creations — Homepage View

Object.assign(window, {
  HomePage: function HomePage({
    setPage,
    products,
    onAddToCart
  }) {
    const {
      ProductCard,
      CategoryCard,
      Button,
      Badge
    } = window.CubeCraft;
    const featured = products.slice(0, 4);
    return React.createElement('div', {
      style: {
        fontFamily: "'Nunito', system-ui, sans-serif"
      }
    },
    // ── Hero ──────────────────────────────────────────────────
    React.createElement('section', {
      style: {
        background: '#fff',
        padding: '72px 0 48px'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        gap: 64
      }
    },
    // Hero copy
    React.createElement('div', {
      style: {
        flex: '0 0 520px'
      }
    }, React.createElement('div', {
      style: {
        display: 'inline-flex',
        marginBottom: 20
      }
    }, React.createElement(Badge, {
      variant: 'brand'
    }, 'New Pet Rocks Drop')), React.createElement('h1', {
      style: {
        fontFamily: "'Nunito', system-ui, sans-serif",
        fontWeight: 800,
        fontSize: 56,
        lineHeight: 1.1,
        letterSpacing: '-0.03em',
        margin: '0 0 20px',
        background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }
    }, 'Made with creativity. Crafted with heart.'), React.createElement('p', {
      style: {
        fontSize: 18,
        color: '#52525E',
        lineHeight: 1.65,
        margin: '0 0 36px',
        fontWeight: 400
      }
    }, 'Handcrafted crochet, custom 3D prints, and branded gear — every piece made by real hands with real care.'), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement(Button, {
      variant: 'gradient',
      size: 'lg',
      onClick: () => setPage({
        key: 'shop'
      })
    }, 'Shop All Products'), React.createElement(Button, {
      variant: 'ghost',
      size: 'lg',
      onClick: () => setPage({
        key: 'shop',
        filter: '3D Prints'
      })
    }, 'See Pet Rocks →'))),
    // Hero image
    React.createElement('div', {
      style: {
        flex: 1,
        borderRadius: 24,
        overflow: 'hidden',
        aspectRatio: '4/3',
        background: '#F4F4F6'
      }
    }, React.createElement('img', {
      src: '../../assets/images/cubecraft_hero_mock_petrocks_v1.png',
      alt: 'Pet Rocks hero',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })))),
    // ── Categories ───────────────────────────────────────────
    React.createElement('section', {
      style: {
        background: '#F4F4F6',
        padding: '64px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px'
      }
    }, React.createElement('h2', {
      style: {
        fontWeight: 800,
        fontSize: 32,
        color: '#18181D',
        margin: '0 0 32px',
        letterSpacing: '-0.01em'
      }
    }, 'Shop by category'), React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20
      }
    }, React.createElement(CategoryCard, {
      image: '../../assets/images/cubecraft_3dprints_category_image.png',
      title: '3D Prints',
      description: 'Fresh off the Bambu Lab — expressive Pet Rocks and custom collectibles ready for your shelf.',
      ctaLabel: 'Shop 3D Prints',
      badge: 'Now shipping',
      href: '#'
    }), React.createElement(CategoryCard, {
      image: '../../assets/images/Crocheted_Items.png',
      title: 'Crocheted Items',
      description: 'Handmade with yarn and love. Hats, plushes, and seasonal favorites.',
      ctaLabel: 'Shop Crochet',
      align: 'right',
      href: '#'
    }), React.createElement(CategoryCard, {
      image: '../../assets/images/apparel_category_image.png',
      title: 'Apparel',
      description: 'Wear the brand. Logo tees and more, printed on quality blanks.',
      ctaLabel: 'Shop Apparel',
      href: '#'
    })))),
    // ── Featured Products ────────────────────────────────────
    React.createElement('section', {
      style: {
        background: '#fff',
        padding: '64px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '0 32px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 32
      }
    }, React.createElement('h2', {
      style: {
        fontWeight: 800,
        fontSize: 32,
        color: '#18181D',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, 'Featured picks'), React.createElement(Button, {
      variant: 'ghost',
      onClick: () => setPage({
        key: 'shop'
      })
    }, 'View all →')), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20
      }
    }, featured.map(p => React.createElement(ProductCard, {
      key: p.id,
      image: p.image,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      badge: p.badge,
      category: p.category,
      onAddToCart: () => onAddToCart(p),
      onWishlist: () => {}
    }))))),
    // ── Brand strip ──────────────────────────────────────────
    React.createElement('section', {
      style: {
        background: 'linear-gradient(135deg,#3B3AB8,#A035CC)',
        padding: '56px 32px',
        textAlign: 'center'
      }
    }, React.createElement('img', {
      src: '../../assets/logos/CubeCraftCreations_Logo_Official_No_BG.png',
      alt: 'CubeCraft Creations',
      style: {
        height: 80,
        filter: 'brightness(0) invert(1)',
        marginBottom: 20
      }
    }), React.createElement('p', {
      style: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 20,
        fontWeight: 600,
        margin: 0
      }
    }, 'Made with creativity. Crafted with heart.')));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/HomePage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ProductDetailPage.jsx
try { (() => {
// CubeCraft Creations — Product Detail Page

Object.assign(window, {
  ProductDetailPage: function ProductDetailPage({
    product,
    onAddToCart,
    onBack
  }) {
    const {
      Button,
      Badge,
      Tag
    } = window.CubeCraft;
    const [qty, setQty] = React.useState(1);
    const [added, setAdded] = React.useState(false);
    const handleAdd = () => {
      for (let i = 0; i < qty; i++) onAddToCart(product);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    };
    return React.createElement('div', {
      style: {
        fontFamily: "'Nunito', system-ui, sans-serif",
        background: '#fff',
        minHeight: '100vh'
      }
    },
    // Breadcrumb
    React.createElement('div', {
      style: {
        padding: '16px 32px',
        maxWidth: 1280,
        margin: '0 auto'
      }
    }, React.createElement('button', {
      onClick: onBack,
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: '#3B3AB8',
        fontFamily: "'Nunito',sans-serif",
        fontWeight: 600,
        fontSize: 14,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        padding: 0
      }
    }, '← Back to shop')),
    // Main content
    React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '16px 32px 64px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 64
      }
    },
    // Image
    React.createElement('div', {
      style: {
        borderRadius: 24,
        overflow: 'hidden',
        aspectRatio: '1',
        background: '#F4F4F6'
      }
    }, product.image && React.createElement('img', {
      src: product.image,
      alt: product.name,
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    })),
    // Info
    React.createElement('div', {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        paddingTop: 8
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, product.badge && React.createElement(Badge, {
      variant: 'brand'
    }, product.badge), React.createElement(Badge, {
      variant: 'blue'
    }, product.category)), React.createElement('h1', {
      style: {
        fontWeight: 800,
        fontSize: 40,
        color: '#18181D',
        lineHeight: 1.15,
        letterSpacing: '-0.02em',
        margin: 0
      }
    }, product.name), React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 12
      }
    }, React.createElement('span', {
      style: {
        fontWeight: 800,
        fontSize: 32,
        color: '#3B3AB8'
      }
    }, `$${product.price}`), product.originalPrice && React.createElement('span', {
      style: {
        fontWeight: 600,
        fontSize: 18,
        color: '#9898A8',
        textDecoration: 'line-through'
      }
    }, `$${product.originalPrice}`), product.originalPrice && React.createElement(Badge, {
      variant: 'error',
      size: 'sm'
    }, 'Sale')), React.createElement('p', {
      style: {
        fontSize: 16,
        color: '#52525E',
        lineHeight: 1.65,
        margin: 0
      }
    }, product.description || 'Handcrafted with care by the CubeCraft Creations team. Every piece is made to order and finished by hand — no two are exactly alike.'),
    // Tags
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, React.createElement(Tag, {
      color: 'blue'
    }, 'Handmade'), React.createElement(Tag, {
      color: 'purple'
    }, 'Made to order'), React.createElement(Tag, {
      color: 'green'
    }, 'In stock')), React.createElement('div', {
      style: {
        width: '100%',
        height: 1,
        background: '#E4E4EA'
      }
    }),
    // Quantity + Add to Cart
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: 12,
        alignItems: 'center'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #E4E4EA',
        borderRadius: 9999,
        overflow: 'hidden'
      }
    }, React.createElement('button', {
      onClick: () => setQty(q => Math.max(1, q - 1)),
      style: {
        width: 40,
        height: 44,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 18,
        fontWeight: 600,
        color: '#3B3AB8'
      }
    }, '−'), React.createElement('span', {
      style: {
        width: 36,
        textAlign: 'center',
        fontWeight: 700,
        fontSize: 16
      }
    }, qty), React.createElement('button', {
      onClick: () => setQty(q => q + 1),
      style: {
        width: 40,
        height: 44,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: 18,
        fontWeight: 600,
        color: '#3B3AB8'
      }
    }, '+')), React.createElement(Button, {
      variant: added ? 'primary' : 'gradient',
      size: 'lg',
      fullWidth: true,
      onClick: handleAdd
    }, added ? '✓ Added to cart!' : 'Add to cart')), React.createElement('div', {
      style: {
        fontSize: 13,
        color: '#70707E',
        fontWeight: 600,
        display: 'flex',
        gap: 16
      }
    }, React.createElement('span', null, '🚚 Free shipping on orders over $50'), React.createElement('span', null, '♻️ Made to order')))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ProductDetailPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/storefront/ShopPage.jsx
try { (() => {
// CubeCraft Creations — Shop / Product Listing View

Object.assign(window, {
  ShopPage: function ShopPage({
    initialFilter,
    products,
    onAddToCart,
    onSelectProduct
  }) {
    const {
      ProductCard,
      Tag,
      Badge
    } = window.CubeCraft;
    const [activeFilter, setActiveFilter] = React.useState(initialFilter || 'All');
    const filters = ['All', '3D Prints', 'Crochet', 'Apparel'];
    const filtered = activeFilter === 'All' ? products : products.filter(p => p.category === activeFilter);
    return React.createElement('div', {
      style: {
        fontFamily: "'Nunito', system-ui, sans-serif",
        background: '#F4F4F6',
        minHeight: '100vh'
      }
    },
    // Page header
    React.createElement('div', {
      style: {
        background: '#fff',
        borderBottom: '1px solid #E4E4EA',
        padding: '32px 32px 0'
      }
    }, React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto'
      }
    }, React.createElement('h1', {
      style: {
        fontWeight: 800,
        fontSize: 36,
        color: '#18181D',
        margin: '0 0 20px',
        letterSpacing: '-0.02em'
      }
    }, activeFilter === 'All' ? 'Shop All' : activeFilter),
    // Filter tabs
    React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8
      }
    }, filters.map(f => React.createElement('button', {
      key: f,
      onClick: () => setActiveFilter(f),
      style: {
        padding: '10px 20px',
        borderRadius: '12px 12px 0 0',
        border: 'none',
        cursor: 'pointer',
        fontFamily: "'Nunito', system-ui, sans-serif",
        fontWeight: 700,
        fontSize: 14,
        background: activeFilter === f ? '#F4F4F6' : 'transparent',
        color: activeFilter === f ? '#3B3AB8' : '#52525E',
        transition: 'all 150ms ease-out',
        borderBottom: activeFilter === f ? '3px solid #3B3AB8' : '3px solid transparent'
      }
    }, f))))),
    // Product grid
    React.createElement('div', {
      style: {
        maxWidth: 1280,
        margin: '0 auto',
        padding: '32px 32px'
      }
    }, React.createElement('div', {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24
      }
    }, React.createElement('span', {
      style: {
        fontSize: 14,
        color: '#70707E',
        fontWeight: 600
      }
    }, `${filtered.length} products`), React.createElement('div', {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, React.createElement('span', {
      style: {
        fontSize: 13,
        color: '#70707E',
        fontWeight: 600
      }
    }, 'Sort:'), React.createElement('select', {
      style: {
        fontFamily: "'Nunito', system-ui, sans-serif",
        fontWeight: 600,
        fontSize: 13,
        border: '1px solid #E4E4EA',
        borderRadius: 9999,
        padding: '6px 14px',
        background: '#fff',
        color: '#18181D',
        cursor: 'pointer'
      }
    }, React.createElement('option', null, 'Featured'), React.createElement('option', null, 'Price: Low to High'), React.createElement('option', null, 'Price: High to Low'), React.createElement('option', null, 'Newest')))), React.createElement('div', {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 20
      }
    }, filtered.map(p => React.createElement('div', {
      key: p.id,
      onClick: () => onSelectProduct(p),
      style: {
        cursor: 'pointer'
      }
    }, React.createElement(ProductCard, {
      image: p.image,
      name: p.name,
      price: p.price,
      originalPrice: p.originalPrice,
      badge: p.badge,
      category: p.category,
      onAddToCart: e => {
        onAddToCart(p);
      },
      onWishlist: () => {}
    }))))));
  }
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/storefront/ShopPage.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.CategoryCard = __ds_scope.CategoryCard;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
