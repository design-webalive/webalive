/* @ds-bundle: {"format":4,"namespace":"WebCommanderDesignSystem_d41e75","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"ProgressBar","sourcePath":"components/core/ProgressBar.jsx"},{"name":"StatusPill","sourcePath":"components/core/StatusPill.jsx"},{"name":"DataTable","sourcePath":"components/data/DataTable.jsx"},{"name":"Pagination","sourcePath":"components/data/Pagination.jsx"},{"name":"Sparkline","sourcePath":"components/data/Sparkline.jsx"},{"name":"StatCard","sourcePath":"components/data/StatCard.jsx"},{"name":"TaskRow","sourcePath":"components/data/TaskRow.jsx"},{"name":"UsageMeter","sourcePath":"components/data/UsageMeter.jsx"},{"name":"AiToolsPanel","sourcePath":"components/editor/AiToolsPanel.jsx"},{"name":"ElementToolbar","sourcePath":"components/editor/ElementToolbar.jsx"},{"name":"InspectorSection","sourcePath":"components/editor/InspectorSection.jsx"},{"name":"OptionTile","sourcePath":"components/editor/OptionTile.jsx"},{"name":"PropertyRow","sourcePath":"components/editor/PropertyRow.jsx"},{"name":"Banner","sourcePath":"components/feedback/Banner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"PromoBanner","sourcePath":"components/feedback/PromoBanner.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"LoadingRegion","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastStack","sourcePath":"components/feedback/Toast.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchInput","sourcePath":"components/forms/SearchInput.jsx"},{"name":"SegmentedControl","sourcePath":"components/forms/SegmentedControl.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"SIDEBAR_ITEMS","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"SidebarNav","sourcePath":"components/navigation/SidebarNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"},{"name":"PageActionBar","sourcePath":"components/settings/PageActionBar.jsx"},{"name":"SettingRow","sourcePath":"components/settings/SettingRow.jsx"},{"name":"SettingsSection","sourcePath":"components/settings/SettingsSection.jsx"},{"name":"SettingsSubNav","sourcePath":"components/settings/SettingsSubNav.jsx"},{"name":"SettingsSubPanel","sourcePath":"components/settings/SettingsSubPanel.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"c806eaa93b65","components/core/Button.jsx":"90554cfc7383","components/core/Card.jsx":"80e63633b831","components/core/Icon.jsx":"f63d6d11c5e9","components/core/IconButton.jsx":"e50f5814ec4c","components/core/ProgressBar.jsx":"d238c74d580c","components/core/StatusPill.jsx":"bc42cd65bfac","components/data/DataTable.jsx":"6dbd7171903c","components/data/Pagination.jsx":"93466ca01471","components/data/Sparkline.jsx":"3d0a4678a4c4","components/data/StatCard.jsx":"40e6bd25dff5","components/data/TaskRow.jsx":"fb058d58b182","components/data/UsageMeter.jsx":"5ad55645daa0","components/editor/AiToolsPanel.jsx":"d791fc9bde7a","components/editor/ElementToolbar.jsx":"5ae4acacfbea","components/editor/InspectorSection.jsx":"0e1550578e32","components/editor/OptionTile.jsx":"d37fc421a7fd","components/editor/PropertyRow.jsx":"9aa095b72dcf","components/feedback/Banner.jsx":"14355f4f9fd0","components/feedback/EmptyState.jsx":"4cf7f6607f1a","components/feedback/Modal.jsx":"a50577c23f3e","components/feedback/PromoBanner.jsx":"470c25d9e825","components/feedback/Spinner.jsx":"9ebfbc2aa0f6","components/feedback/Toast.jsx":"7534a1a3007d","components/forms/Checkbox.jsx":"7ebc650770d3","components/forms/Input.jsx":"4ffc124fbc91","components/forms/Radio.jsx":"008f665e704b","components/forms/SearchInput.jsx":"434b8fc57fd7","components/forms/SegmentedControl.jsx":"fa8c3469624c","components/forms/Select.jsx":"89c0fc149fff","components/forms/Switch.jsx":"b1d41a8bd06d","components/navigation/Breadcrumb.jsx":"5e8b0a8da6a6","components/navigation/SidebarNav.jsx":"d6fe2a9d4960","components/navigation/Tabs.jsx":"692b0ca3c9cd","components/navigation/TopBar.jsx":"d4adac7c833f","components/settings/PageActionBar.jsx":"388d083bd209","components/settings/SettingRow.jsx":"8fdb60da1322","components/settings/SettingsSection.jsx":"bf062d89ff05","components/settings/SettingsSubNav.jsx":"7f59261da847","components/settings/SettingsSubPanel.jsx":"af17d4728db3","ui_kits/admin/AdminShell.jsx":"15bf31c18165","ui_kits/admin/AnalyticsScreen.jsx":"b29e54f93e69","ui_kits/admin/DashboardScreen.jsx":"646408ba3334","ui_kits/admin/ProductsScreen.jsx":"5529656e8bf1","ui_kits/admin/SettingsScreen.jsx":"989b9288bf28","ui_kits/admin/WebsiteScreen.jsx":"4c593deba696","ui_kits/editor/EditorCanvas.jsx":"dc55ef69b2de","ui_kits/editor/EditorTopBar.jsx":"e1cc4d4c2983","ui_kits/editor/SectionInspector.jsx":"2a4571cc9634","ui_kits/editor/TextInspector.jsx":"2e30b9f05048"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WebCommanderDesignSystem_d41e75 = window.WebCommanderDesignSystem_d41e75 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    background: 'var(--wc-gray-100)',
    color: 'var(--wc-text-muted)'
  },
  info: {
    background: 'var(--wc-blue-50)',
    color: 'var(--wc-blue-500)'
  },
  success: {
    background: 'var(--wc-green-bg)',
    color: 'var(--wc-green-text)'
  },
  warning: {
    background: 'var(--wc-amber-bg-strong)',
    color: 'var(--wc-amber-text)'
  },
  danger: {
    background: 'var(--wc-red-bg-strong)',
    color: 'var(--wc-red-text)'
  },
  ai: {
    background: 'var(--wc-ai-bg)',
    color: 'var(--wc-ai-purple-deep)'
  },
  count: {
    background: 'var(--wc-gray-100)',
    color: 'var(--wc-text-secondary)'
  }
};
function Badge({
  children,
  tone = 'neutral',
  shape = 'pill',
  size = 'md',
  style
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: size === 'sm' ? 18 : 22,
      padding: size === 'sm' ? '0 6px' : '0 9px',
      borderRadius: shape === 'pill' ? 'var(--wc-radius-pill)' : 'var(--wc-radius-xs)',
      font: `var(--wc-weight-semibold) ${size === 'sm' ? 11 : 12}px/1 var(--wc-font-sans)`,
      ...t,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  title,
  action,
  meta,
  children,
  padding = 16,
  headerBorder = true,
  tabs,
  tabsAction,
  style,
  bodyStyle
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--wc-surface)',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-md)',
      boxShadow: 'var(--wc-shadow-card)',
      ...style
    }
  }, tabs && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '0 30px',
      borderBottom: '1px solid var(--wc-border)'
    }
  }, tabs, tabsAction), (title || action) && /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '14px 16px',
      borderBottom: headerBorder ? '1px solid var(--wc-divider)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-semibold) var(--wc-size-title)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, meta)), action), /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      ...bodyStyle
    }
  }, children));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const pascal = n => n.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('');

/* WebCommander's product icons are a 24px stroke set. No icon binaries shipped
   with the source material, so this wrapper reads Lucide (loaded from CDN as
   window.lucide) — closest match on stroke weight and corner style. */
function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color = 'currentColor',
  style
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons || null;
  let node = lib && (lib[pascal(name)] || lib[name]);
  if (node && node[0] === 'svg') node = node[2];
  const base = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: color,
    strokeWidth,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  };
  if (!Array.isArray(node)) return React.createElement('svg', base, React.createElement('rect', {
    x: 3,
    y: 3,
    width: 18,
    height: 18,
    rx: 3
  }));
  return React.createElement('svg', base, node.map((c, i) => React.createElement(c[0], {
    key: i,
    ...c[1]
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const H = {
  sm: 30,
  md: 36,
  lg: 40
};
const PAD = {
  sm: '0 14px',
  md: '0 18px',
  lg: '0 22px'
};
const FS = {
  sm: 13,
  md: 14,
  lg: 15
};
const VARIANTS = {
  primary: {
    background: 'var(--wc-blue-500)',
    color: '#fff',
    border: '1px solid var(--wc-blue-500)'
  },
  secondary: {
    background: '#fff',
    color: 'var(--wc-blue-500)',
    border: '1px solid var(--wc-blue-500)'
  },
  neutral: {
    background: '#fff',
    color: 'var(--wc-text-secondary)',
    border: '1px solid var(--wc-border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--wc-text-muted)',
    border: '1px solid transparent'
  },
  link: {
    background: 'transparent',
    color: 'var(--wc-blue-500)',
    border: '1px solid transparent',
    padding: 0,
    height: 'auto'
  },
  danger: {
    background: 'var(--wc-red-text)',
    color: '#fff',
    border: '1px solid var(--wc-red-text)'
  },
  publish: {
    background: 'var(--wc-blue-500)',
    color: '#fff',
    border: '1px solid var(--wc-blue-500)',
    borderRadius: 'var(--wc-radius-pill)'
  }
};
const HOVER = {
  primary: {
    background: 'var(--wc-blue-600)',
    borderColor: 'var(--wc-blue-600)'
  },
  publish: {
    background: 'var(--wc-blue-600)',
    borderColor: 'var(--wc-blue-600)'
  },
  secondary: {
    background: 'var(--wc-blue-50)'
  },
  neutral: {
    background: 'var(--wc-gray-50)'
  },
  ghost: {
    background: 'var(--wc-gray-50)',
    color: 'var(--wc-text-secondary)'
  },
  link: {
    color: 'var(--wc-blue-600)'
  },
  danger: {
    background: '#c01f1f',
    borderColor: '#c01f1f'
  }
};
function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  trailingIcon,
  disabled,
  fullWidth,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      height: variant === 'link' ? 'auto' : H[size],
      padding: variant === 'link' ? 0 : PAD[size],
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      font: `var(--wc-weight-semibold) ${FS[size]}px/1 var(--wc-font-sans)`,
      borderRadius: 'var(--wc-radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background var(--wc-dur-fast) var(--wc-ease), color var(--wc-dur-fast) var(--wc-ease)',
      opacity: disabled ? 0.45 : 1,
      width: fullWidth ? '100%' : undefined,
      whiteSpace: 'nowrap',
      ...v,
      ...(hover && !disabled ? HOVER[variant] : null),
      ...style
    }
  }, icon ? typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16
  }) : icon : null, children, trailingIcon ? typeof trailingIcon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: trailingIcon,
    size: 14
  }) : trailingIcon : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon,
  size = 34,
  shape = 'circle',
  variant = 'outline',
  label,
  badge,
  active,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const outline = variant === 'outline';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      borderRadius: shape === 'circle' ? '50%' : 'var(--wc-radius-sm)',
      border: outline ? '1px solid var(--wc-border-strong)' : '1px solid transparent',
      background: active ? 'var(--wc-blue-50)' : hover ? 'var(--wc-gray-50)' : outline ? '#fff' : 'transparent',
      color: active ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
      transition: 'background var(--wc-dur-fast) var(--wc-ease)',
      ...style
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.5)
  }) : icon, badge != null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -3,
      right: -3,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 'var(--wc-radius-pill)',
      background: 'var(--wc-blue-500)',
      color: '#fff',
      font: 'var(--wc-weight-semibold) 10px/16px var(--wc-font-sans)',
      textAlign: 'center'
    }
  }, badge));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/ProgressBar.jsx
try { (() => {
function ProgressBar({
  value = 0,
  max = 100,
  tone = 'blue',
  height = 6,
  track,
  style
}) {
  const colors = {
    blue: 'var(--wc-blue-500)',
    green: 'var(--wc-green-dot)',
    amber: 'var(--wc-amber-icon)',
    red: 'var(--wc-red-text)'
  };
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: 'var(--wc-radius-pill)',
      background: track || 'var(--wc-gray-150)',
      overflow: 'hidden',
      width: '100%',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: pct + '%',
      height: '100%',
      borderRadius: 'var(--wc-radius-pill)',
      background: colors[tone] || colors.blue,
      transition: 'width var(--wc-dur-slow) var(--wc-ease)'
    }
  }));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/core/StatusPill.jsx
try { (() => {
const TONES = {
  success: {
    color: 'var(--wc-green-text)',
    bg: 'var(--wc-green-bg-soft)',
    dot: 'var(--wc-green-dot)'
  },
  warning: {
    color: 'var(--wc-amber-text)',
    bg: 'var(--wc-amber-bg)',
    dot: 'var(--wc-amber-icon)'
  },
  danger: {
    color: 'var(--wc-red-text)',
    bg: 'var(--wc-red-bg)',
    dot: 'var(--wc-red-text)'
  },
  neutral: {
    color: 'var(--wc-text-muted)',
    bg: 'var(--wc-gray-100)',
    dot: 'var(--wc-gray-400)'
  },
  info: {
    color: 'var(--wc-blue-500)',
    bg: 'var(--wc-blue-50)',
    dot: 'var(--wc-blue-500)'
  }
};
function StatusPill({
  children,
  tone = 'success',
  variant = 'dot',
  style
}) {
  const t = TONES[tone] || TONES.success;
  if (variant === 'dot') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        font: `var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)`,
        color: t.color,
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: t.dot
      }
    }), children);
  }
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 24,
      padding: '0 12px',
      borderRadius: 'var(--wc-radius-xs)',
      background: t.bg,
      color: t.color,
      font: 'var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { StatusPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatusPill.jsx", error: String((e && e.message) || e) }); }

// components/data/DataTable.jsx
try { (() => {
function Tick({
  checked
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--wc-radius-xs)',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--wc-blue-500)' : '#fff',
      border: '1px solid ' + (checked ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)')
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    color: "#fff",
    strokeWidth: 3
  }));
}
function DataTable({
  columns = [],
  rows = [],
  selectable,
  selected = [],
  onSelect,
  sortKey,
  sortDir = 'asc',
  onSort,
  rowHeight = 60,
  columnDividers,
  rowActions = true,
  gutter = 30,
  container,
  minBodyHeight,
  empty,
  style
}) {
  const [hover, setHover] = React.useState(-1);
  const grid = (selectable ? '46px ' : '') + columns.map(c => c.width || '1fr').join(' ') + (rowActions ? ' 44px' : '');
  const divider = i => columnDividers && i > 0 ? {
    borderLeft: '1px solid var(--wc-divider)',
    paddingLeft: 12
  } : null;
  const allOn = rows.length > 0 && selected.length === rows.length;
  const shell = container ? {
    background: 'var(--wc-surface)',
    border: '1px solid var(--wc-border)',
    borderRadius: 'var(--wc-radius-md)'
  } : null;
  const body = /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      ...(container ? null : style)
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: grid,
      alignItems: 'center',
      padding: '0 ' + gutter + 'px',
      borderTop: container ? 'none' : '1px solid var(--wc-border)',
      borderBottom: '1px solid var(--wc-border)',
      height: 42
    }
  }, selectable && /*#__PURE__*/React.createElement("span", {
    onClick: () => onSelect && onSelect(allOn ? [] : rows.map((r, i) => r.id != null ? r.id : i)),
    style: {
      cursor: onSelect ? 'pointer' : 'default'
    }
  }, /*#__PURE__*/React.createElement(Tick, {
    checked: allOn
  })), columns.map((c, i) => {
    const on = sortKey === c.key;
    return /*#__PURE__*/React.createElement("button", {
      key: c.key,
      type: "button",
      onClick: () => c.sortable && onSort && onSort(c.key),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        border: 'none',
        background: 'transparent',
        height: 24,
        padding: 0,
        textAlign: 'left',
        cursor: c.sortable ? 'pointer' : 'default',
        minWidth: 0,
        justifyContent: c.align === 'right' ? 'flex-end' : 'flex-start',
        color: on ? 'var(--wc-text)' : 'var(--wc-text-secondary)',
        font: (on ? 'var(--wc-weight-bold)' : 'var(--wc-weight-semibold)') + ' var(--wc-size-caption)/1 var(--wc-font-sans)',
        ...divider(i)
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, c.header), c.sortable && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: on && sortDir === 'desc' ? 'arrow-down' : 'arrow-up',
      size: 13,
      color: on ? 'var(--wc-text)' : 'var(--wc-gray-400)',
      style: {
        marginLeft: 'auto',
        opacity: on ? 1 : 0
      }
    }));
  }), rowActions && /*#__PURE__*/React.createElement("span", null)), rows.map((r, i) => {
    const id = r.id != null ? r.id : i;
    const on = selected.indexOf(id) > -1;
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      onMouseEnter: () => setHover(i),
      onMouseLeave: () => setHover(-1),
      style: {
        display: 'grid',
        gridTemplateColumns: grid,
        alignItems: 'center',
        padding: '0 ' + gutter + 'px',
        minHeight: rowHeight,
        borderBottom: '1px solid var(--wc-divider)',
        background: on ? 'var(--wc-blue-50)' : hover === i ? 'var(--wc-gray-25)' : '#fff',
        transition: 'background var(--wc-dur-fast) var(--wc-ease)'
      }
    }, selectable && /*#__PURE__*/React.createElement("span", {
      onClick: () => onSelect && onSelect(on ? selected.filter(s => s !== id) : selected.concat([id])),
      style: {
        cursor: onSelect ? 'pointer' : 'default'
      }
    }, /*#__PURE__*/React.createElement(Tick, {
      checked: on
    })), columns.map((c, ci) => /*#__PURE__*/React.createElement("div", {
      key: c.key,
      style: {
        minWidth: 0,
        paddingRight: 12,
        textAlign: c.align === 'right' ? 'right' : 'left',
        font: 'var(--wc-weight-regular) var(--wc-size-body)/1.4 var(--wc-font-sans)',
        color: 'var(--wc-text-secondary)',
        ...(columnDividers && ci > 0 ? {
          paddingLeft: 12
        } : null)
      }
    }, c.render ? c.render(r) : r[c.key])), rowActions && /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-label": "Row actions",
      style: {
        width: 28,
        height: 28,
        display: 'grid',
        placeItems: 'center',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: 'var(--wc-text-muted)',
        justifySelf: 'end'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "ellipsis-vertical",
      size: 16
    })));
  }), rows.length === 0 && empty && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      minHeight: minBodyHeight || 320
    }
  }, empty));
  if (!container) return body;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...shell,
      minHeight: minBodyHeight ? minBodyHeight + 42 : undefined,
      paddingBottom: 1,
      ...style
    }
  }, body);
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/data/Sparkline.jsx
try { (() => {
/** Tiny trend line. Stroke only in stat cards; add fill for the analytics area chart. */
function Sparkline({
  data = [],
  tone = 'green',
  width = 78,
  height = 26,
  fill = false,
  strokeWidth = 1.5,
  style
}) {
  const colors = {
    green: 'var(--wc-green-dot)',
    red: 'var(--wc-red-text)',
    blue: 'var(--wc-blue-500)',
    cyan: 'var(--wc-cyan-500)',
    gray: 'var(--wc-gray-400)'
  };
  const c = colors[tone] || colors.green;
  const n = data.length;
  if (n < 2) return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    style: style
  });
  const min = Math.min(...data),
    max = Math.max(...data),
    span = max - min || 1;
  const pts = data.map((v, i) => [i / (n - 1) * (width - strokeWidth) + strokeWidth / 2, height - strokeWidth / 2 - (v - min) / span * (height - strokeWidth)]);
  const line = pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' ');
  return /*#__PURE__*/React.createElement("svg", {
    width: width,
    height: height,
    viewBox: '0 0 ' + width + ' ' + height,
    style: {
      display: 'block',
      ...style
    }
  }, fill && /*#__PURE__*/React.createElement("polygon", {
    points: '0,' + height + ' ' + line + ' ' + width + ',' + height,
    fill: c,
    opacity: "0.12"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
Object.assign(__ds_scope, { Sparkline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCard.jsx
try { (() => {
function StatCard({
  label,
  value,
  comparison,
  delta,
  trend = 'up',
  series,
  divider = true,
  style
}) {
  const up = trend === 'up';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      padding: '16px 20px 18px',
      borderRight: divider ? '1px solid var(--wc-divider)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-micro)/1 var(--wc-font-sans)',
      letterSpacing: 'var(--wc-ls-micro)',
      textTransform: 'uppercase',
      color: 'var(--wc-text-micro)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 9,
      font: 'var(--wc-text-stat)',
      letterSpacing: 'var(--wc-ls-tight)',
      color: 'var(--wc-text)'
    }
  }, value), comparison && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, "VS\xA0 ", comparison, " PREV"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12
    }
  }, delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--wc-radius-pill)',
      background: up ? 'var(--wc-green-bg)' : 'var(--wc-red-bg-strong)',
      color: up ? 'var(--wc-green-text)' : 'var(--wc-red-text)',
      font: 'var(--wc-weight-semibold) var(--wc-size-caption)/1 var(--wc-font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 9
    }
  }, up ? '\u25B2' : '\u25BC'), delta) : /*#__PURE__*/React.createElement("span", null), series && /*#__PURE__*/React.createElement(__ds_scope.Sparkline, {
    data: series,
    tone: up ? 'green' : 'red'
  })));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/data/TaskRow.jsx
try { (() => {
function TaskRow({
  icon,
  title,
  count,
  meta,
  action,
  onAction,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderTop: '1px solid var(--wc-divider)',
      background: hover ? 'var(--wc-gray-25)' : 'transparent',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--wc-radius-sm)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--wc-gray-50)',
      color: 'var(--wc-text-secondary)',
      flex: '0 0 auto'
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }) : icon), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), count != null && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: "count",
    size: "sm"
  }, count)), meta && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, meta)), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      color: 'var(--wc-blue-500)',
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, action));
}
Object.assign(__ds_scope, { TaskRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TaskRow.jsx", error: String((e && e.message) || e) }); }

// components/data/UsageMeter.jsx
try { (() => {
function UsageMeter({
  label,
  used,
  total,
  tone = 'green',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 7,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-sm)/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, used), " of ", total)), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: typeof used === 'number' ? used : 0,
    max: typeof total === 'number' ? total : 100,
    tone: tone,
    height: 5
  }));
}
Object.assign(__ds_scope, { UsageMeter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/UsageMeter.jsx", error: String((e && e.message) || e) }); }

// components/editor/AiToolsPanel.jsx
try { (() => {
function AiToolsPanel({
  title = 'AI tools',
  actions = [],
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14,
      borderRadius: 'var(--wc-radius-md)',
      border: '1px solid #e4e1fb',
      background: 'linear-gradient(160deg, var(--wc-ai-panel-from), var(--wc-ai-panel-to))',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "sparkles",
    size: 16,
    color: "var(--wc-ai-purple)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 8
    }
  }, actions.map(a => /*#__PURE__*/React.createElement("button", {
    key: a.label,
    type: "button",
    onClick: a.onClick,
    style: {
      height: 32,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: '0 11px',
      background: '#fff',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-sm)',
      cursor: 'pointer',
      color: 'var(--wc-text-secondary)',
      font: 'var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)',
      gridColumn: a.wide ? 'span 2' : undefined
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a.icon,
    size: 14,
    color: "var(--wc-text-muted)"
  }), a.label, a.wide && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--wc-text-muted)",
    style: {
      marginLeft: 'auto'
    }
  })))), footer);
}
Object.assign(__ds_scope, { AiToolsPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/AiToolsPanel.jsx", error: String((e && e.message) || e) }); }

// components/editor/ElementToolbar.jsx
try { (() => {
function ElementToolbar({
  label = 'Text',
  actions = ['copy', 'arrow-up', 'arrow-down', 'sparkles', 'trash-2'],
  variant = 'dark',
  onAction,
  style
}) {
  if (variant === 'chip') {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 26,
        padding: '0 11px',
        borderRadius: 'var(--wc-radius-xs)',
        background: 'var(--wc-blue-500)',
        color: '#fff',
        font: 'var(--wc-weight-semibold) var(--wc-size-sm)/1 var(--wc-font-sans)',
        ...style
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "grip-vertical",
      size: 13
    }), label);
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 30,
      padding: '0 8px',
      background: 'var(--wc-toolbar-dark)',
      borderRadius: 'var(--wc-radius-xs)',
      boxShadow: 'var(--wc-shadow-toolbar)',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "grip-vertical",
    size: 13,
    color: "rgba(255,255,255,.6)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 3,
      marginRight: 6,
      font: 'var(--wc-weight-semibold) var(--wc-size-sm)/1 var(--wc-font-sans)'
    }
  }, label, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 13
  })), actions.map(a => /*#__PURE__*/React.createElement("button", {
    key: a,
    type: "button",
    onClick: () => onAction && onAction(a),
    style: {
      width: 24,
      height: 24,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      cursor: 'pointer',
      background: 'transparent',
      borderRadius: 'var(--wc-radius-xs)',
      color: a === 'sparkles' ? 'var(--wc-ai-purple)' : 'rgba(255,255,255,.9)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: a,
    size: 15
  }))));
}
Object.assign(__ds_scope, { ElementToolbar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/ElementToolbar.jsx", error: String((e && e.message) || e) }); }

// components/editor/InspectorSection.jsx
try { (() => {
function InspectorSection({
  title,
  children,
  defaultOpen = true,
  dense,
  style
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      borderBottom: '1px solid var(--wc-divider)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      height: 46,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 16,
    color: "var(--wc-text-muted)"
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: dense ? '0 16px 14px' : '2px 16px 18px',
      display: 'grid',
      gap: 12
    }
  }, children));
}
Object.assign(__ds_scope, { InspectorSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/InspectorSection.jsx", error: String((e && e.message) || e) }); }

// components/editor/OptionTile.jsx
try { (() => {
function OptionTile({
  icon,
  label,
  selected,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: 7,
      padding: '13px 6px',
      cursor: 'pointer',
      borderRadius: 'var(--wc-radius-md)',
      border: '1px solid ' + (selected ? 'var(--wc-blue-500)' : 'var(--wc-border)'),
      background: selected ? 'var(--wc-blue-50)' : hover ? 'var(--wc-gray-25)' : '#fff',
      transition: 'background var(--wc-dur-fast) var(--wc-ease), border-color var(--wc-dur-fast) var(--wc-ease)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: selected ? 'var(--wc-blue-500)' : 'var(--wc-blue-400)'
    }
  }, typeof icon === 'string' ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  }) : icon), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: selected ? 'var(--wc-text)' : 'var(--wc-text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { OptionTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/OptionTile.jsx", error: String((e && e.message) || e) }); }

// components/editor/PropertyRow.jsx
try { (() => {
function PropertyRow({
  label,
  children,
  hint,
  align = 'center',
  labelWidth = 96,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: labelWidth + 'px 1fr',
      alignItems: align,
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label), hint && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, hint)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      justifyContent: 'flex-end'
    }
  }, children));
}
Object.assign(__ds_scope, { PropertyRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/editor/PropertyRow.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Banner.jsx
try { (() => {
const TONES = {
  warning: {
    bg: 'var(--wc-amber-bg)',
    icon: 'triangle-alert',
    color: 'var(--wc-amber-icon)',
    chip: 'var(--wc-amber-bg-strong)'
  },
  danger: {
    bg: 'var(--wc-red-bg)',
    icon: 'circle-alert',
    color: 'var(--wc-red-text)',
    chip: 'var(--wc-red-bg-strong)'
  },
  info: {
    bg: 'var(--wc-blue-50)',
    icon: 'info',
    color: 'var(--wc-blue-500)',
    chip: 'var(--wc-blue-100)'
  },
  success: {
    bg: 'var(--wc-green-bg-soft)',
    icon: 'circle-check',
    color: 'var(--wc-green-text)',
    chip: 'var(--wc-green-bg)'
  }
};
function Banner({
  tone = 'warning',
  title,
  description,
  actions,
  iconTile = true,
  style
}) {
  const t = TONES[tone] || TONES.warning;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      padding: '14px 20px',
      background: t.bg,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '0 0 auto',
      width: iconTile ? 34 : 22,
      height: iconTile ? 34 : 22,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: iconTile ? t.chip : 'transparent',
      color: t.color
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 20
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, description)), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, actions));
}
Object.assign(__ds_scope, { Banner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Banner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'plus',
  title,
  description,
  action,
  height,
  iconTile = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      gap: iconTile ? 14 : 12,
      padding: '60px 20px',
      minHeight: height,
      textAlign: 'center',
      ...style
    }
  }, iconTile ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 74,
      height: 74,
      borderRadius: 'var(--wc-radius-md)',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--wc-blue-50)',
      border: '1px solid var(--wc-blue-100)',
      color: 'var(--wc-blue-500)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30
  })) : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 30,
    color: "var(--wc-gray-400)"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-title)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 5,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, description)), action);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  title,
  children,
  footer,
  width = 500,
  onClose,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--wc-scrim)',
      display: 'grid',
      placeItems: 'center',
      zIndex: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      maxWidth: '92%',
      background: '#fff',
      borderRadius: 'var(--wc-radius-lg)',
      boxShadow: 'var(--wc-shadow-modal)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 12,
      padding: '18px 22px 6px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-semibold) var(--wc-size-h3)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--wc-text-muted)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '10px 22px 20px'
    }
  }, children), footer && /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 12,
      padding: '16px 22px',
      borderTop: '1px solid var(--wc-divider)'
    }
  }, footer)));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/PromoBanner.jsx
try { (() => {
function PromoBanner({
  badge,
  children,
  action,
  onDismiss,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16,
      padding: '12px 20px',
      background: 'linear-gradient(90deg, var(--wc-promo-from), var(--wc-promo-to))',
      color: '#fff',
      ...style
    }
  }, badge && /*#__PURE__*/React.createElement("span", {
    style: {
      height: 24,
      padding: '0 12px',
      display: 'inline-flex',
      alignItems: 'center',
      borderRadius: 'var(--wc-radius-pill)',
      background: 'var(--wc-gray-900)',
      font: 'var(--wc-weight-bold) var(--wc-size-caption)/1 var(--wc-font-sans)'
    }
  }, badge), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1.3 var(--wc-font-sans)'
    }
  }, children), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      height: 30,
      padding: '0 16px',
      border: 'none',
      borderRadius: 'var(--wc-radius-pill)',
      background: '#fff',
      color: 'var(--wc-promo-to)',
      cursor: 'pointer',
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, action.label), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      position: 'absolute',
      right: 18,
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 18
  })));
}
Object.assign(__ds_scope, { PromoBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/PromoBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
/* Route/data loader. A 3px ring, three quarters --wc-blue-500 and one quarter
   --wc-gray-200, rotating once per 0.7s — the product's only busy indicator.
   Drawn as SVG with a native SMIL rotate so it needs no global keyframes. */
function Spinner({
  size = 34,
  thickness = 3,
  tone = 'blue',
  style
}) {
  const c = tone === 'inverse' ? 'rgba(255,255,255,.9)' : tone === 'muted' ? 'var(--wc-gray-500)' : 'var(--wc-blue-500)';
  const track = tone === 'inverse' ? 'rgba(255,255,255,.25)' : 'var(--wc-gray-200)';
  const r = (size - thickness) / 2;
  const circ = 2 * Math.PI * r;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: '0 0 ' + size + ' ' + size,
    role: "status",
    "aria-label": "Loading",
    style: {
      display: 'block',
      flex: '0 0 auto',
      ...style
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: track,
    strokeWidth: thickness
  }), /*#__PURE__*/React.createElement("circle", {
    cx: size / 2,
    cy: size / 2,
    r: r,
    fill: "none",
    stroke: c,
    strokeWidth: thickness,
    strokeLinecap: "round",
    strokeDasharray: circ * 0.72 + ' ' + circ * 0.28
  }, /*#__PURE__*/React.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    dur: "0.7s",
    repeatCount: "indefinite",
    from: '0 ' + size / 2 + ' ' + size / 2,
    to: '360 ' + size / 2 + ' ' + size / 2
  })));
}

/* The full-region loading state: spinner centered in the content area while a
   screen fetches. Keeps the rail and top bar live — never a full-screen cover. */
function LoadingRegion({
  size = 34,
  label,
  minHeight = 320,
  background = 'var(--wc-canvas)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight,
      display: 'grid',
      placeItems: 'center',
      gap: 14,
      alignContent: 'center',
      background,
      ...style
    }
  }, /*#__PURE__*/React.createElement(Spinner, {
    size: size
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Spinner, LoadingRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
/* Transient confirmation/failure message: a plain white panel, a hairline
   border, one glyph in the tone colour and one line of copy. Deliberately
   undecorated — no accent bar, no tinted badge, no second type size. Anything
   that needs explaining is a Banner, not a toast. */
const TONES = {
  success: {
    icon: 'circle-check',
    color: 'var(--wc-green-text)',
    onDark: 'var(--wc-green-dot)'
  },
  error: {
    icon: 'circle-x',
    color: 'var(--wc-red-text)',
    onDark: '#f87171'
  },
  warning: {
    icon: 'triangle-alert',
    color: 'var(--wc-amber-icon)',
    onDark: '#fbbf24'
  },
  info: {
    icon: 'info',
    color: 'var(--wc-blue-500)',
    onDark: 'var(--wc-blue-200)'
  }
};

/* variant: 'plain' (default) | 'inverse' (dark panel, for the editor canvas) —
   plus an optional trailing action link (Undo, View). */
function Toast({
  tone = 'info',
  variant = 'plain',
  message,
  action,
  onClose,
  style
}) {
  const t = TONES[tone] || TONES.info;
  const dark = variant === 'inverse';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      minHeight: 48,
      minWidth: 320,
      maxWidth: 420,
      padding: '13px 14px',
      background: dark ? 'var(--wc-gray-900)' : 'var(--wc-surface)',
      borderRadius: 'var(--wc-radius-md)',
      border: '1px solid ' + (dark ? 'transparent' : 'var(--wc-border)'),
      boxShadow: 'var(--wc-shadow-popover)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: t.icon,
    size: 18,
    color: dark ? t.onDark : t.color,
    style: {
      flex: '0 0 auto',
      marginTop: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      paddingRight: action || onClose ? 2 : 4,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.45 var(--wc-font-sans)',
      color: dark ? '#fff' : 'var(--wc-text)'
    }
  }, message), action && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: action.onClick,
    style: {
      flex: '0 0 auto',
      marginTop: 1,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      padding: 0,
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      font: 'var(--wc-weight-medium) var(--wc-size-body)/1.45 var(--wc-font-sans)',
      color: dark ? '#fff' : 'var(--wc-blue-500)'
    }
  }, action.label), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      flex: '0 0 auto',
      width: 18,
      height: 18,
      marginTop: 1,
      display: 'grid',
      placeItems: 'center',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: dark ? 'var(--wc-gray-400)' : 'var(--wc-text-micro)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}

/* Fixed overlay the app mounts once; toasts stack newest-first with a 10px gap. */
function ToastStack({
  position = 'top-center',
  children,
  style
}) {
  const [v, h] = position.split('-');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      zIndex: 90,
      display: 'grid',
      gap: 10,
      pointerEvents: 'none',
      justifyItems: h === 'center' ? 'center' : h === 'left' ? 'start' : 'end',
      [v]: 20,
      left: h === 'right' ? 'auto' : 20,
      right: h === 'left' ? 'auto' : 20,
      ...style
    }
  }, React.Children.map(children, c => /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'auto'
    }
  }, c)));
}
Object.assign(__ds_scope, { Toast, ToastStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  checked,
  label,
  disabled,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 16,
      height: 16,
      borderRadius: 'var(--wc-radius-xs)',
      display: 'grid',
      placeItems: 'center',
      background: checked ? 'var(--wc-blue-500)' : '#fff',
      border: '1px solid ' + (checked ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      transition: 'background var(--wc-dur-fast) var(--wc-ease)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 12,
    color: "#fff",
    strokeWidth: 3
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  value,
  defaultValue,
  placeholder,
  label,
  required,
  hint,
  suffix,
  unit,
  disabled,
  size = 'md',
  align = 'left',
  width,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const h = size === 'sm' ? 'var(--wc-control-h-sm)' : 'var(--wc-control-h)';
  const field = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      height: h,
      width: width || '100%',
      background: disabled ? 'var(--wc-gray-50)' : '#fff',
      borderRadius: 'var(--wc-radius-sm)',
      border: '1px solid ' + (focus ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      boxShadow: focus ? 'var(--wc-shadow-focus)' : 'none',
      overflow: 'hidden',
      transition: 'border-color var(--wc-dur-fast) var(--wc-ease)'
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: onChange ? value : undefined,
    defaultValue: onChange ? defaultValue : value !== undefined ? value : defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      border: 'none',
      outline: 'none',
      background: 'transparent',
      padding: '0 10px',
      textAlign: align,
      color: 'var(--wc-text)',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '0 9px',
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)',
      textTransform: 'uppercase'
    }
  }, unit), suffix);
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: '#000'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wc-red-text)'
    }
  }, " *")), field, hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/* Single-select option, used inside SettingsSubPanel groups (Display pagination
   vs Enable load more). Dot geometry matches Checkbox at 16px. */
function Radio({
  checked,
  label,
  name,
  value,
  disabled,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(value === undefined ? true : value),
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: '#fff',
      border: '1px solid ' + (checked ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      transition: 'border-color var(--wc-dur-fast) var(--wc-ease)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--wc-blue-500)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label));
}

/* Vertical radio group. */
function RadioGroup({
  options = [],
  value,
  onChange,
  gap = 14,
  style
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap,
      ...style
    }
  }, opts.map(o => /*#__PURE__*/React.createElement(React.Fragment, {
    key: o.value
  }, /*#__PURE__*/React.createElement(Radio, {
    label: o.label,
    value: o.value,
    checked: value === o.value,
    onChange: onChange
  }), o.children && value === o.value && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingLeft: 25
    }
  }, o.children))));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchInput.jsx
try { (() => {
function SearchInput({
  placeholder = 'Search',
  value,
  onChange,
  width = 250,
  shape = 'pill',
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      width,
      height: 'var(--wc-control-h)',
      padding: '0 12px',
      background: '#fff',
      border: '1px solid ' + (focus ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      borderRadius: shape === 'pill' ? 'var(--wc-radius-pill)' : 'var(--wc-radius-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "search",
    size: 16,
    color: "var(--wc-text-micro)",
    style: {
      flex: '0 0 auto'
    }
  }), /*#__PURE__*/React.createElement("input", {
    value: onChange ? value : undefined,
    defaultValue: onChange ? undefined : value,
    placeholder: placeholder,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }));
}
Object.assign(__ds_scope, { SearchInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/SegmentedControl.jsx
try { (() => {
function SegmentedControl({
  options = [],
  value,
  onChange,
  size = 'md',
  variant = 'track',
  style
}) {
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const h = size === 'sm' ? 28 : 34;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: variant === 'track' ? 2 : 0,
      padding: variant === 'track' ? 2 : 0,
      background: variant === 'track' ? 'var(--wc-gray-100)' : '#fff',
      border: variant === 'track' ? 'none' : '1px solid var(--wc-border-strong)',
      borderRadius: 'var(--wc-radius-sm)',
      ...style
    }
  }, opts.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        height: h - (variant === 'track' ? 4 : 0),
        minWidth: o.label ? undefined : h - 4,
        padding: o.label ? '0 14px' : 0,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
        border: 'none',
        cursor: 'pointer',
        borderRadius: 'var(--wc-radius-xs)',
        background: on ? '#fff' : 'transparent',
        boxShadow: on && variant === 'track' ? 'var(--wc-shadow-card)' : 'none',
        color: on ? 'var(--wc-text)' : 'var(--wc-text-micro)',
        font: (on ? 'var(--wc-weight-semibold)' : 'var(--wc-weight-regular)') + ' var(--wc-size-sm)/1 var(--wc-font-sans)',
        transition: 'background var(--wc-dur-fast) var(--wc-ease)'
      }
    }, o.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: o.icon,
      size: 16
    }), o.label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/* Custom listbox instead of a native <select>: the OS popup can't be styled,
   so the menu is a 6px-radius white panel with a card shadow, 32px rows,
   blue-50 tint on the selected row and a check at its right. */
function Select({
  value,
  options = [],
  label,
  size = 'md',
  shape = 'sm',
  width,
  disabled,
  onChange,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(null);
  const [val, setVal] = React.useState(value);
  const ref = React.useRef(null);
  const cur = onChange ? value : val;
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  const sel = opts.find(o => o.value === cur) || opts[0];
  React.useEffect(() => {
    if (!open) return undefined;
    const away = e => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const key = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', away);
    document.addEventListener('keydown', key);
    return () => {
      document.removeEventListener('mousedown', away);
      document.removeEventListener('keydown', key);
    };
  }, [open]);
  const pick = o => {
    setOpen(false);
    if (onChange) onChange({
      target: {
        value: o.value
      }
    }, o.value);else setVal(o.value);
  };
  const field = /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: 'relative',
      width: width || '100%'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    onClick: () => !disabled && setOpen(!open),
    style: {
      width: '100%',
      height: size === 'sm' ? 'var(--wc-control-h-sm)' : 'var(--wc-control-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      textAlign: 'left',
      background: disabled ? 'var(--wc-gray-50)' : '#fff',
      cursor: disabled ? 'not-allowed' : 'pointer',
      border: '1px solid ' + (open ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      borderRadius: shape === 'pill' ? 'var(--wc-radius-pill)' : 'var(--wc-radius-sm)',
      color: 'var(--wc-text)',
      outline: 'none',
      padding: shape === 'pill' ? '0 12px 0 14px' : '0 9px 0 10px',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      transition: 'border-color var(--wc-dur-fast) var(--wc-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: '1 1 auto',
      minWidth: 0,
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, sel && sel.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16,
    color: "var(--wc-text-muted)",
    style: {
      flex: '0 0 auto',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform var(--wc-dur-fast) var(--wc-ease)'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    role: "listbox",
    style: {
      position: 'absolute',
      zIndex: 40,
      top: 'calc(100% + 4px)',
      left: 0,
      width: '100%',
      background: '#fff',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-sm)',
      boxShadow: 'var(--wc-shadow-popover)',
      padding: 4,
      maxHeight: 264,
      overflowY: 'auto'
    }
  }, opts.map(o => {
    const on = o.value === cur;
    return /*#__PURE__*/React.createElement("div", {
      key: o.value,
      role: "option",
      "aria-selected": on,
      onClick: () => pick(o),
      onMouseEnter: () => setHover(o.value),
      onMouseLeave: () => setHover(null),
      style: {
        height: 32,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '0 8px 0 10px',
        cursor: 'pointer',
        borderRadius: 'var(--wc-radius-xs)',
        background: on ? 'var(--wc-blue-50)' : hover === o.value ? 'var(--wc-gray-50)' : 'transparent',
        color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
        font: (on ? 'var(--wc-weight-medium)' : 'var(--wc-weight-regular)') + ' var(--wc-size-body)/1 var(--wc-font-sans)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, o.label), on && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14,
      color: "var(--wc-blue-500)",
      style: {
        flex: '0 0 auto'
      }
    }));
  })));
  if (!label) return /*#__PURE__*/React.createElement("div", {
    style: style
  }, field);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: '#000'
    }
  }, label), field);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/data/Pagination.jsx
try { (() => {
/* Table footer pager. Rendered on its own row below the table container:
   page-size Select left, pager right. Measured from the Settings list pages. */
function Cell({
  children,
  label,
  active,
  disabled,
  onClick,
  width = 34,
  bare
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-current": active ? 'page' : undefined,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      minWidth: width,
      height: 34,
      padding: '0 8px',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--wc-radius-sm)',
      cursor: disabled ? 'default' : 'pointer',
      border: bare ? '1px solid transparent' : '1px solid ' + (active ? 'var(--wc-blue-500)' : 'var(--wc-border)'),
      background: !disabled && hover && !active ? 'var(--wc-gray-50)' : '#fff',
      color: disabled ? 'var(--wc-text-micro)' : active ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
      font: (active ? 'var(--wc-weight-semibold)' : 'var(--wc-weight-regular)') + ' var(--wc-size-body)/1 var(--wc-font-sans)',
      transition: 'background var(--wc-dur-fast) var(--wc-ease)'
    }
  }, children);
}
function Arrow({
  dir,
  disabled,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dir === 'prev' ? 'Previous page' : 'Next page',
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 34,
      height: 34,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--wc-radius-sm)',
      border: '1px solid var(--wc-border)',
      background: !disabled && hover ? 'var(--wc-gray-50)' : '#fff',
      cursor: disabled ? 'default' : 'pointer',
      color: disabled ? 'var(--wc-text-micro)' : 'var(--wc-text-secondary)',
      transition: 'background var(--wc-dur-fast) var(--wc-ease)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: dir === 'prev' ? 'chevron-left' : 'chevron-right',
    size: 17
  }));
}
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  window: win = 4,
  pageSize,
  pageSizeOptions = ['10', '25', '50', '100'],
  onPageSizeChange,
  style
}) {
  const go = p => onChange && p >= 1 && p <= pageCount && p !== page && onChange(p);
  let start = Math.max(1, Math.min(page - Math.floor((win - 1) / 2), pageCount - win + 1));
  if (start < 1) start = 1;
  const end = Math.min(pageCount, start + win - 1);
  const nums = [];
  for (let p = start; p <= end; p += 1) nums.push(p);
  const pager = /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Arrow, {
    dir: "prev",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }), /*#__PURE__*/React.createElement(Cell, {
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, "Prev"), start > 1 && /*#__PURE__*/React.createElement(Cell, {
    label: "Page 1",
    onClick: () => go(1)
  }, "1"), start > 2 && /*#__PURE__*/React.createElement(Cell, {
    bare: true,
    disabled: true
  }, "\u2026"), nums.map(p => /*#__PURE__*/React.createElement(Cell, {
    key: p,
    label: 'Page ' + p,
    active: p === page,
    onClick: () => go(p)
  }, p)), end < pageCount && /*#__PURE__*/React.createElement(Cell, {
    bare: true,
    disabled: true
  }, "\u2026"), /*#__PURE__*/React.createElement(Cell, {
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }, "Next"), /*#__PURE__*/React.createElement(Arrow, {
    dir: "next",
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }));
  if (pageSize == null) return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      ...style
    }
  }, pager);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 20,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Select, {
    value: String(pageSize),
    width: 72,
    options: pageSizeOptions,
    onChange: onPageSizeChange
  }), pager);
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  checked,
  onChange,
  disabled,
  label,
  size = 'md',
  style
}) {
  const w = size === 'sm' ? 32 : 38;
  const h = size === 'sm' ? 18 : 20;
  const k = h - 4;
  const knob = /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      display: 'inline-block',
      width: w,
      height: h,
      borderRadius: 'var(--wc-radius-pill)',
      flex: '0 0 auto',
      background: checked ? 'var(--wc-blue-500)' : 'var(--wc-gray-300)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      transition: 'background var(--wc-dur) var(--wc-ease)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? w - k - 2 : 2,
      width: k,
      height: k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 2px rgba(16,24,40,.2)',
      transition: 'left var(--wc-dur) var(--wc-ease)'
    }
  }));
  if (!label) return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      ...style
    }
  }, knob);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, knob, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function Breadcrumb({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    const label = typeof it === 'string' ? it : it.label;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: label + i
    }, i > 0 && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "chevron-right",
      size: 14,
      color: "var(--wc-gray-400)"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        font: (last ? 'var(--wc-weight-semibold)' : 'var(--wc-weight-regular)') + ' var(--wc-size-body)/1 var(--wc-font-sans)',
        color: last ? 'var(--wc-text)' : 'var(--wc-text-muted)',
        cursor: last ? 'default' : 'pointer'
      }
    }, label));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SidebarNav.jsx
try { (() => {
/** Canonical rail, in product order. Icon names are Lucide. */
const SIDEBAR_ITEMS = [{
  id: 'dashboard',
  label: 'Dashboard',
  icon: 'panel-top'
}, {
  id: 'editor',
  label: 'Editor',
  icon: 'layout-panel-left'
}, {
  id: 'website',
  label: 'Website',
  icon: 'app-window'
}, {
  id: 'order',
  label: 'Order',
  icon: 'clipboard-list'
}, {
  id: 'products',
  label: 'Products',
  icon: 'box'
}, {
  id: 'customers',
  label: 'Customers',
  icon: 'contact'
}, {
  id: 'analytics',
  label: 'Analytics',
  icon: 'chart-no-axes-combined'
}, {
  id: 'marketing',
  label: 'Marketing',
  icon: 'megaphone'
}, {
  id: 'plugins',
  label: 'Plugins',
  icon: 'puzzle'
}, {
  id: 'settings',
  label: 'Settings',
  icon: 'settings'
}];
function SidebarNav({
  items = SIDEBAR_ITEMS,
  active,
  onSelect,
  logo,
  version = '8.0.0',
  help = true,
  style
}) {
  const [hover, setHover] = React.useState(null);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--wc-sidebar-w)',
      flex: '0 0 var(--wc-sidebar-w)',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--wc-surface)',
      borderRight: '1px solid var(--wc-border)',
      height: '100%',
      ...style
    }
  }, logo && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--wc-topbar-h)',
      flex: '0 0 var(--wc-topbar-h)',
      display: 'grid',
      placeItems: 'center',
      borderBottom: '1px solid var(--wc-border)'
    }
  }, logo), /*#__PURE__*/React.createElement("div", {
    className: "wc-rail-scroll",
    style: {
      flex: 1,
      minHeight: 0,
      paddingTop: 12
    }
  }, items.map(it => {
    const on = it.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        width: '100%',
        height: 'var(--wc-sidebar-item-h)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        padding: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 40,
        height: 40,
        borderRadius: 'var(--wc-radius-nav)',
        display: 'grid',
        placeItems: 'center',
        background: on ? 'var(--wc-blue-500)' : hover === it.id ? 'var(--wc-blue-50)' : 'transparent',
        color: on ? '#fff' : hover === it.id ? 'var(--wc-blue-500)' : 'var(--wc-gray-900)',
        transition: 'background var(--wc-dur-fast) var(--wc-ease), color var(--wc-dur-fast) var(--wc-ease)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 21,
      strokeWidth: 1.6
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        font: (on ? 'var(--wc-weight-semibold)' : 'var(--wc-weight-medium)') + ' 10px/1 var(--wc-font-sans)',
        letterSpacing: 'var(--wc-ls-nav)',
        textTransform: 'uppercase',
        color: on || hover === it.id ? 'var(--wc-blue-500)' : 'var(--wc-text-muted)'
      }
    }, it.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      padding: '16px 0 0',
      textAlign: 'center'
    }
  }, version && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 16,
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1.6 var(--wc-font-sans)',
      color: 'var(--wc-gray-500)'
    }
  }, "Version", /*#__PURE__*/React.createElement("br", null), version), help && /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--wc-divider)',
      height: 54,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Help",
    style: {
      width: 26,
      height: 26,
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--wc-gray-900)',
      padding: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-help",
    size: 21,
    strokeWidth: 1.6
  })))));
}
Object.assign(__ds_scope, { SIDEBAR_ITEMS, SidebarNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SidebarNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  variant = 'underline',
  style
}) {
  const opts = items.map(i => typeof i === 'string' ? {
    value: i,
    label: i
  } : i);
  if (variant === 'pill') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        gap: 4,
        padding: 4,
        background: 'var(--wc-gray-50)',
        border: '1px solid var(--wc-border)',
        borderRadius: 'var(--wc-radius-md)',
        ...style
      }
    }, opts.map(o => {
      const on = o.value === value;
      return /*#__PURE__*/React.createElement("button", {
        key: o.value,
        type: "button",
        onClick: () => onChange && onChange(o.value),
        style: {
          height: 30,
          padding: '0 14px',
          border: 'none',
          cursor: 'pointer',
          borderRadius: 'var(--wc-radius-sm)',
          background: on ? '#fff' : 'transparent',
          boxShadow: on ? 'var(--wc-shadow-card)' : 'none',
          color: on ? 'var(--wc-text)' : 'var(--wc-text-muted)',
          font: 'var(--wc-weight-semibold) var(--wc-size-sm)/1 var(--wc-font-sans)'
        }
      }, o.label);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'stretch',
      gap: 4,
      borderBottom: '1px solid var(--wc-border)',
      ...style
    }
  }, opts.map(o => {
    const on = o.value === value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      onClick: () => onChange && onChange(o.value),
      style: {
        position: 'relative',
        height: size === 'sm' ? 40 : 46,
        padding: '0 15px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
        font: (on ? 'var(--wc-weight-semibold)' : 'var(--wc-weight-regular)') + ' var(--wc-size-body)/1 var(--wc-font-sans)'
      }
    }, o.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? 'var(--wc-blue-500)' : 'transparent'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  icon,
  logo,
  credits,
  right,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--wc-topbar-h)',
      display: 'flex',
      alignItems: 'stretch',
      background: 'var(--wc-surface)',
      borderBottom: '1px solid var(--wc-border)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--wc-sidebar-w)',
      flex: '0 0 var(--wc-sidebar-w)',
      display: 'grid',
      placeItems: 'center',
      borderRight: '1px solid var(--wc-border)'
    }
  }, logo || /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-bold) 15px/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, "WC")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '0 14px'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 19,
    color: "var(--wc-text)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-text-page-title)',
      color: 'var(--wc-text)'
    }
  }, title)), credits && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      height: 28,
      padding: '0 12px',
      border: '1px solid var(--wc-border-strong)',
      borderRadius: 'var(--wc-radius-pill)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)',
      whiteSpace: 'nowrap'
    }
  }, credits.label || 'AI credits'), /*#__PURE__*/React.createElement(__ds_scope.ProgressBar, {
    value: credits.used,
    max: credits.total,
    height: 4,
    style: {
      width: 58
    },
    tone: "blue"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-sm)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, credits.used, "/", credits.total)), children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '0 16px'
    }
  }, right));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// components/settings/PageActionBar.jsx
try { (() => {
/* White bar at the top of a settings detail page: breadcrumb left,
   Cancel / Save right. */
function PageActionBar({
  breadcrumb = [],
  onCancel,
  onSave,
  saveLabel = 'Save',
  cancelLabel = 'Cancel',
  actions,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      minHeight: 64,
      padding: '0 24px',
      background: 'var(--wc-surface)',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement(__ds_scope.Breadcrumb, {
    items: breadcrumb
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: '0 0 auto'
    }
  }, actions || /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    onClick: onSave
  }, saveLabel))));
}
Object.assign(__ds_scope, { PageActionBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/settings/PageActionBar.jsx", error: String((e && e.message) || e) }); }

// components/settings/SettingRow.jsx
try { (() => {
/* A single setting: label (plus optional description) on the left, control on
   the right. `divider` draws the 1px top rule that separates rows in a section. */
function SettingRow({
  label,
  description,
  children,
  height,
  indent = 0,
  divider = true,
  align = 'center',
  style
}) {
  const stacked = !!description;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: stacked ? 'flex-start' : align,
      justifyContent: 'space-between',
      gap: 24,
      minHeight: height || (stacked ? 60 : 52),
      padding: '0 24px 0 ' + (24 + indent) + 'px',
      borderTop: divider ? '1px solid var(--wc-divider)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: stacked ? 14 : 0,
      paddingBottom: stacked ? 14 : 0,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      maxWidth: 470,
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '0 0 auto',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      paddingTop: stacked ? 12 : 0,
      paddingBottom: stacked ? 12 : 0
    }
  }, children));
}
Object.assign(__ds_scope, { SettingRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/settings/SettingRow.jsx", error: String((e && e.message) || e) }); }

// components/settings/SettingsSection.jsx
try { (() => {
/* Collapsible settings card: icon tile + title + description in the header,
   setting rows stacked beneath with 1px dividers. */
function SettingsSection({
  icon,
  title,
  description,
  defaultOpen = true,
  open: openProp,
  onToggle,
  children,
  style
}) {
  const [openState, setOpen] = React.useState(defaultOpen);
  const open = openProp === undefined ? openState : openProp;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--wc-surface)',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-md)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => onToggle ? onToggle(!open) : setOpen(!open),
    style: {
      width: '100%',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 16,
      padding: '20px 24px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer'
    }
  }, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: '0 0 auto',
      borderRadius: 'var(--wc-radius-md)',
      background: 'var(--wc-gray-50)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--wc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--wc-weight-semibold) var(--wc-size-h3)/1.25 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), description && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 5,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.45 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, description)), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 17,
    color: "var(--wc-text-muted)",
    style: {
      marginTop: 4
    }
  })), open && /*#__PURE__*/React.createElement("div", null, children));
}
Object.assign(__ds_scope, { SettingsSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/settings/SettingsSection.jsx", error: String((e && e.message) || e) }); }

// components/settings/SettingsSubNav.jsx
try { (() => {
/* Left rail inside a settings detail page (230px). Shares the Add Product
   siderail system: every row carries a 15px leading line icon, rows are inset
   with a small radius, and the active row is a blue-50 tint pill (icon and
   label blue-500, medium weight). Group headers are micro muted
   labels with a trailing chevron only — no leading icon, no fills. */
function SettingsSubNav({
  items = [],
  active,
  onSelect,
  width = 230,
  footer,
  style
}) {
  const [hover, setHover] = React.useState(null);
  const [closed, setClosed] = React.useState({});
  const row = (it, nested) => {
    const on = it.id === active;
    const hovered = hover === it.id && !on;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onSelect && onSelect(it.id),
      "aria-current": on ? 'page' : undefined,
      onMouseEnter: () => setHover(it.id),
      onMouseLeave: () => setHover(null),
      style: {
        width: 'calc(100% - 16px)',
        height: 34,
        textAlign: 'left',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        margin: '0 8px',
        padding: nested ? '0 10px 0 18px' : '0 10px 0 6px',
        borderRadius: 'var(--wc-radius-sm)',
        background: on ? 'var(--wc-blue-50)' : hovered ? 'var(--wc-gray-50)' : 'transparent',
        color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
        font: (on ? 'var(--wc-weight-medium)' : 'var(--wc-weight-regular)') + ' var(--wc-size-body)/1 var(--wc-font-sans)',
        transition: 'background var(--wc-dur) var(--wc-ease)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon || 'sliders-horizontal',
      size: 15,
      color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-muted)',
      style: {
        flex: '0 0 auto'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        minWidth: 0,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }
    }, it.label));
  };
  const isGroup = it => !!it.children || it.group;
  const grouped = items.some(isGroup);
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width,
      flex: '0 0 auto',
      borderRight: '1px solid var(--wc-divider)',
      background: 'var(--wc-surface)',
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 0 10px'
    }
  }, grouped ? items.map((it, i) => {
    if (!isGroup(it)) return /*#__PURE__*/React.createElement("div", {
      key: it.id
    }, row(it));
    const first = !items.slice(0, i).some(isGroup);
    const open = !closed[it.id];
    return /*#__PURE__*/React.createElement("div", {
      key: it.id,
      style: first ? {
        marginTop: 2
      } : {
        marginTop: 2,
        paddingTop: 8,
        borderTop: '1px solid var(--wc-divider)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      "aria-expanded": !!(it.children && it.children.length) && open,
      onClick: () => it.children && it.children.length ? setClosed({
        ...closed,
        [it.id]: open
      }) : onSelect && onSelect(it.id),
      style: {
        width: '100%',
        height: 26,
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '0 12px 0 14px',
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--wc-font-sans)',
        fontSize: 'var(--wc-size-micro)',
        fontWeight: 'var(--wc-weight-semibold)',
        lineHeight: 1,
        letterSpacing: '.02em',
        color: 'var(--wc-text-muted)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: '1 1 auto',
        minWidth: 0
      }
    }, it.label), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: open && it.children && it.children.length ? 'chevron-up' : 'chevron-down',
      size: 12,
      color: "var(--wc-gray-400)"
    })), open && it.children && it.children.length > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '2px 0 6px'
      }
    }, it.children.map(c => row(c, true))));
  }) : /*#__PURE__*/React.createElement("div", null, items.map(it => row(it)))), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: 12
    }
  }, footer));
}
Object.assign(__ds_scope, { SettingsSubNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/settings/SettingsSubNav.jsx", error: String((e && e.message) || e) }); }

// components/settings/SettingsSubPanel.jsx
try { (() => {
/* Dependent options revealed by the toggle above them: sunken fill, 3px blue
   rail on the left, inset from the card's side padding. */
function SettingsSubPanel({
  children,
  gap = 0,
  padding = '6px 18px',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      margin: '0 24px 20px',
      background: 'var(--wc-gray-25)',
      borderLeft: '3px solid var(--wc-blue-500)',
      padding,
      display: 'grid',
      gap,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { SettingsSubPanel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/settings/SettingsSubPanel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AdminShell.jsx
try { (() => {
const {
  SidebarNav,
  SIDEBAR_ITEMS,
  TopBar,
  Button,
  IconButton
} = window.WC;
const NAV = SIDEBAR_ITEMS;
const TITLES = {
  dashboard: ['Dashboard', 'panel-top'],
  editor: ['Editor', 'layout-panel-left'],
  website: ['Website', 'app-window'],
  order: ['Order', 'clipboard-list'],
  products: ['Products', 'box'],
  customers: ['Customers', 'contact'],
  analytics: ['Analytics', 'chart-no-axes-combined'],
  marketing: ['Marketing', 'megaphone'],
  plugins: ['Plugins', 'puzzle'],
  settings: ['Settings', 'settings']
};
function Avatar() {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--wc-blue-50)',
      color: 'var(--wc-blue-500)',
      display: 'grid',
      placeItems: 'center',
      font: 'var(--wc-weight-semibold) 11px/1 var(--wc-font-sans)'
    }
  }, "JD");
}
function AdminShell({
  view,
  onView,
  banner,
  children
}) {
  const [title, icon] = TITLES[view] || TITLES.dashboard;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100vh',
      display: 'grid',
      gridTemplateRows: 'auto 1fr',
      background: 'var(--wc-canvas)'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: title,
    icon: icon,
    credits: {
      used: 2,
      total: 5
    },
    logo: /*#__PURE__*/React.createElement("img", {
      src: "../../assets/logo-mark.png",
      width: "32",
      alt: "WebCommander"
    }),
    right: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "neutral",
      size: "sm",
      icon: "external-link"
    }, "View Site"), /*#__PURE__*/React.createElement(IconButton, {
      icon: "bell",
      variant: "plain",
      badge: 2,
      label: "Notifications"
    }), /*#__PURE__*/React.createElement(Avatar, null))
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "search",
    label: "Search"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 0
    }
  }, /*#__PURE__*/React.createElement(SidebarNav, {
    items: NAV,
    active: view,
    onSelect: onView
  }), /*#__PURE__*/React.createElement("main", {
    className: "wc-scroll",
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'auto'
    }
  }, banner, children)));
}
Object.assign(window, {
  AdminShell,
  Avatar,
  NAV
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AdminShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/AnalyticsScreen.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  Select,
  StatCard,
  Tabs,
  Sparkline,
  Badge
} = window.WC;
const SALES = [0, 0, 940, 20, 8, 6, 10, 4, 6, 3, 5, 4, 6, 3, 4, 5, 3, 4, 6, 3, 4, 5, 3, 4, 5, 3, 4, 6, 4, 5];
const BARS = [['Table', 570], ['Chairr', 260], ['GiftCCC', 220], ['Product 18…', 6], ['Product 19…', 3], ['Product 29…', 2]];
function BarChart({
  data,
  max = 600
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '34px 1fr',
      gap: 10,
      height: 250
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)',
      paddingBottom: 22
    }
  }, [600, 500, 400, 300, 200, 100, 0].map(v => /*#__PURE__*/React.createElement("span", {
    key: v
  }, v))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + data.length + ', 1fr)',
      alignItems: 'end',
      gap: 26,
      borderLeft: '1px solid var(--wc-border)',
      borderBottom: '1px solid var(--wc-border)',
      padding: '0 18px'
    }
  }, data.map(([label, v]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 6,
      alignContent: 'end',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 60,
      height: Math.max(2, v / max * 190),
      background: 'var(--wc-cyan-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)',
      position: 'relative',
      top: 4,
      whiteSpace: 'nowrap'
    }
  }, label)))));
}
function AnalyticsScreen() {
  const [tab, setTab] = React.useState('Sales');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)',
      maxWidth: 1300,
      margin: '0 auto',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) var(--wc-size-h1)/1.2 var(--wc-font-sans)'
    }
  }, "Analytics"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Track business performance with real-time insights.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Last 30 Days",
    options: ['Last 7 Days', 'Last 30 Days', 'Last 90 Days'],
    width: 200
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis-vertical",
    label: "More"
  }))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Revenue",
    value: "$1,603.15",
    comparison: "$3,940",
    delta: "59.3%",
    trend: "down",
    series: [2, 2, 9, 2, 2, 2, 2]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Net Sales",
    value: "$1,453.15",
    comparison: "$3,857.5",
    delta: "62.3%",
    trend: "down",
    series: [2, 2, 8, 2, 2, 2, 2]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Avg. Order Value",
    value: "$160.32",
    comparison: "$151.54",
    delta: "5.8%",
    series: [3, 3, 6, 3, 3, 3, 3]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Orders",
    value: "10",
    comparison: "26",
    delta: "61.5%",
    trend: "down",
    series: [2, 2, 7, 2, 2, 2, 2],
    divider: false
  }))), /*#__PURE__*/React.createElement(Tabs, {
    variant: "pill",
    value: tab,
    onChange: setTab,
    items: ['Sales', 'Orders', 'Customers', 'Products / Inventory', 'Cart & Conversion', 'Acquisition', 'Behavior', 'Report Library']
  }), /*#__PURE__*/React.createElement(Card, {
    title: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10
      }
    }, tab, " ", /*#__PURE__*/React.createElement(Badge, {
      tone: "info"
    }, "2 reports")),
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
        color: 'var(--wc-text-secondary)'
      }
    }, "Total Revenue: ", /*#__PURE__*/React.createElement("strong", {
      style: {
        color: 'var(--wc-text)'
      }
    }, "$1,603.15")),
    bodyStyle: {
      padding: 16,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Sales Over Time",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "View Details"),
    bodyStyle: {
      padding: '20px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(Sparkline, {
    data: SALES,
    tone: "blue",
    fill: true,
    width: 520,
    height: 230,
    strokeWidth: 2,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--wc-weight-regular) var(--wc-size-micro)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "2026-08-04"), /*#__PURE__*/React.createElement("span", null, "2026-08-19"), /*#__PURE__*/React.createElement("span", null, "2026-09-03"))), /*#__PURE__*/React.createElement(Card, {
    title: "Sales by Product",
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "View Details"),
    bodyStyle: {
      padding: '20px 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(BarChart, {
    data: BARS
  }))));
}
Object.assign(window, {
  AnalyticsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/AnalyticsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/DashboardScreen.jsx
try { (() => {
const {
  Card,
  Button,
  IconButton,
  Badge,
  StatCard,
  UsageMeter,
  TaskRow,
  Icon,
  ProgressBar
} = window.WC;
const BEST = [['Linen Oversized Shirt', 30, 184, '$5,520'], ['Merino Crew Knit', 25, 142, '$3,550'], ['Heavyweight Tee', 20, 128, '$2,560'], ['Wide-leg Trousers', 15, 96, '$1,440'], ['Cotton Hoodie', 10, 80, '$800']];
const SETUP = ['Update Business Info', 'Design Your Website', 'Set Up Payment Methods', 'Set Up Shipping and Delivery', 'Add Your First Product', 'Configure Custom Domain'];
const FEED = [['shopping-bag', 'New order #1058 — $182.4', 'Sara K. · 3 items', '2 mins ago'], ['package', 'Order #1057 fulfilled', 'Shipped via Sendle', '14 mins ago'], ['user-plus', 'Customer signup — m.osei@…', 'Newsletter opt-in', '32 mins ago'], ['star', '★★★★★ on Merino Crew Knit', 'by Priya R.', '1 hr ago']];
function Thumb({
  size = 34
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      width: size,
      height: size,
      borderRadius: 'var(--wc-radius-sm)',
      background: 'var(--wc-gray-100)',
      border: '1px solid var(--wc-border)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--wc-gray-400)',
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "shirt",
    size: Math.round(size * 0.5)
  }));
}
function SetupStep({
  n,
  label,
  open,
  onToggle,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--wc-divider)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onToggle,
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '14px 18px',
      border: 'none',
      background: open ? 'var(--wc-gray-25)' : 'transparent',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: 'var(--wc-radius-xs)',
      display: 'grid',
      placeItems: 'center',
      background: n === 1 ? 'var(--wc-green-dot)' : 'var(--wc-gray-100)',
      color: n === 1 ? '#fff' : 'var(--wc-text-muted)',
      font: 'var(--wc-weight-semibold) 12px/1 var(--wc-font-sans)'
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: 'left',
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1 var(--wc-font-sans)'
    }
  }, label), /*#__PURE__*/React.createElement(Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 16,
    color: "var(--wc-text-muted)"
  })), open && children);
}
function DashboardScreen() {
  const [step, setStep] = React.useState(1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)',
      display: 'grid',
      gap: 16,
      maxWidth: 1400,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) var(--wc-size-h1)/1.2 var(--wc-font-sans)'
    }
  }, "Good Morning, Jordan"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1.4 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Here\u2019s what\u2019s happening with Avone Store today.")), /*#__PURE__*/React.createElement(Card, {
    title: "Performance Overview",
    padding: 0,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "neutral",
      size: "sm",
      icon: "calendar",
      trailingIcon: "chevron-down"
    }, "Last 30 days")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Sales",
    value: "$8,890",
    comparison: "$7,000",
    delta: "12.4%",
    series: [3, 3.3, 3.1, 3.9, 4.3, 5, 6]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Total Orders",
    value: "1,284",
    comparison: "2,084",
    delta: "8.2%",
    series: [2, 2.5, 2.3, 3.3, 3.9, 4.2, 5]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "AOV",
    value: "$37.60",
    comparison: "$50.00",
    delta: "2.1%",
    trend: "down",
    series: [6, 5.6, 5.9, 4.4, 3.6, 3.1, 2.9]
  }), /*#__PURE__*/React.createElement(StatCard, {
    label: "Conversion Rate",
    value: "3.42%",
    comparison: "4.00%",
    delta: "0.6%",
    series: [3, 4, 3.2, 4.4, 3.6, 4.8, 4.2],
    divider: false
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'minmax(0,1.05fr) minmax(0,1.15fr) 320px',
      gap: 16,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Things to do",
    padding: 0,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
        color: 'var(--wc-text-micro)'
      }
    }, "Updated 12s ago ", /*#__PURE__*/React.createElement(Icon, {
      name: "refresh-cw",
      size: 14
    }))
  }, /*#__PURE__*/React.createElement(TaskRow, {
    icon: "triangle-alert",
    title: "Low stock items",
    count: 9,
    meta: "products near reorder",
    action: "Review"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    icon: "package",
    title: "Pending fulfillment",
    count: 14,
    meta: "oldest 2d 4h",
    action: "Pick & Pack"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    icon: "rotate-ccw",
    title: "Refund requests",
    count: 3,
    meta: "$148 total",
    action: "Review"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    icon: "credit-card",
    title: "Payments to capture",
    count: 3,
    meta: "expires 48h",
    action: "Capture"
  }), /*#__PURE__*/React.createElement(TaskRow, {
    icon: "star",
    title: "New Reviews",
    count: 6,
    meta: "2 below 3 star, need reply",
    action: "Open"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Best-Selling Products",
    padding: 0
  }, BEST.map(([name, sold, price, total]) => /*#__PURE__*/React.createElement("div", {
    key: name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '11px 16px',
      borderTop: '1px solid var(--wc-divider)'
    }
  }, /*#__PURE__*/React.createElement(Thumb, null), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1.3 var(--wc-font-sans)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 2,
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, "Total Sell: ", sold, " \xA0\xA0 Unit price: ", '$' + price)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, total)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    style: {
      background: 'linear-gradient(160deg,#f6fbff,#ffffff 60%)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: 'var(--wc-blue-500)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-micro)/1 var(--wc-font-sans)',
      letterSpacing: 'var(--wc-ls-micro)',
      textTransform: 'uppercase',
      color: 'var(--wc-blue-500)'
    }
  }, "Startup")), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '8px 0 16px',
      font: 'var(--wc-weight-bold) var(--wc-size-title)/1.3 var(--wc-font-sans)'
    }
  }, "Usage overview"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(UsageMeter, {
    label: "AI credits",
    used: 50,
    total: 50,
    tone: "red"
  }), /*#__PURE__*/React.createElement(UsageMeter, {
    label: "Monthly sales",
    used: "$900",
    total: "$1,000",
    tone: "amber"
  }), /*#__PURE__*/React.createElement(UsageMeter, {
    label: "Monthly page views",
    used: "1.2k",
    total: "2.5k",
    tone: "green"
  })), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    style: {
      marginTop: 18
    }
  }, "Upgrade Plan")), /*#__PURE__*/React.createElement(Card, {
    title: "New Features",
    padding: 16,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-left",
      size: 26,
      label: "Previous"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "chevron-right",
      size: 26,
      label: "Next"
    }))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 110,
      borderRadius: 'var(--wc-radius-md)',
      background: 'linear-gradient(150deg,#eef5ff,#f7f2ff)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--wc-radius-md)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--wc-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    width: "24",
    alt: "WebCommander"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: 'var(--wc-blue-500)',
      display: 'grid',
      placeItems: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "link",
    size: 14
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 'var(--wc-radius-md)',
      background: '#fff',
      display: 'grid',
      placeItems: 'center',
      boxShadow: 'var(--wc-shadow-card)',
      color: '#d97757'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "asterisk",
    size: 22
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "info"
  }, "Sales tactics")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1.3 var(--wc-font-sans)'
    }
  }, "Design with Claude is here"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 8px',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Create AI-generated pages using your store branding and style."), /*#__PURE__*/React.createElement("a", {
    href: "#learn-more"
  }, "Learn more")), /*#__PURE__*/React.createElement(Card, {
    title: "Contact information",
    padding: 0
  }, [['mail', 'Email', 'support@commander.app'], ['phone', 'Phone', '+61 1300 555 010'], ['message-square', 'Live Chat', 'Start a conversation']].map(([ic, label, val]) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 16px',
      borderTop: '1px solid var(--wc-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 'var(--wc-radius-sm)',
      background: 'var(--wc-gray-50)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--wc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 15
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 3,
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, val)))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--wc-divider)',
      textAlign: 'center',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Browse answers in our: ", /*#__PURE__*/React.createElement("a", {
    href: "#help"
  }, "Help center \u2192"))))), /*#__PURE__*/React.createElement(Card, {
    padding: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 18px 14px',
      background: 'linear-gradient(100deg,#ffffff 40%,#fdf3f8 80%,#f3f6ff)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) 22px/1.25 var(--wc-font-sans)'
    }
  }, "Lets Setup Your Website"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '5px 0 0',
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Your complete setup guide")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '12px 18px',
      borderTop: '1px solid var(--wc-divider)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, "1/6 completed \xA0(16%)"), /*#__PURE__*/React.createElement(ProgressBar, {
    value: 16,
    tone: "green",
    style: {
      maxWidth: 190
    }
  })), SETUP.map((label, i) => /*#__PURE__*/React.createElement(SetupStep, {
    key: label,
    n: i + 1,
    label: label,
    open: step === i + 1,
    onToggle: () => setStep(step === i + 1 ? 0 : i + 1)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '2px 18px 18px 52px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 3,
      borderRadius: 3,
      background: 'var(--wc-blue-100)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1.3 var(--wc-font-sans)'
    }
  }, "Business Info"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 8px',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Add your store name, brand logo & other info."), /*#__PURE__*/React.createElement("a", {
    href: "#update-info"
  }, "Update Info")))))), /*#__PURE__*/React.createElement(Card, {
    title: "Recent Activity Feed",
    padding: 0,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "Activity feed")
  }, FEED.map(([ic, title, meta, time]) => /*#__PURE__*/React.createElement(TaskRow, {
    key: title,
    icon: ic,
    title: title,
    meta: meta,
    action: /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
        color: 'var(--wc-text-micro)'
      }
    }, time)
  }))));
}
Object.assign(window, {
  DashboardScreen,
  Thumb
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/DashboardScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/ProductsScreen.jsx
try { (() => {
const {
  Card,
  Tabs,
  Banner,
  Button,
  IconButton,
  SearchInput,
  DataTable,
  StatusPill,
  Badge,
  Select
} = window.WC;
const ROWS = [{
  id: 1,
  name: 'Short sleeve T-Shirt',
  sub: '2 variations available',
  flag: 'Pre-order active',
  type: 'Physical'
}, {
  id: 2,
  name: 'Mobile Phone, Charger & Adapter Accessories',
  type: 'Gift Card'
}, {
  id: 3,
  name: 'Short sleeve T-Shirt',
  type: 'Downloadable'
}, {
  id: 4,
  name: 'T-Shirt',
  type: 'Physical'
}, {
  id: 5,
  name: 'Short sleeve T-Shirt',
  type: 'Gift Card'
}, {
  id: 6,
  name: 'T-Shirt',
  type: 'Downloadable'
}].map(r => ({
  ...r,
  status: 'Active',
  sku: 'ABC001214745',
  category: 'T-Shirt',
  price: '$100.00',
  inventory: 'In Stock'
}));
function ProductsScreen({
  limit,
  onDismissLimit
}) {
  const [tab, setTab] = React.useState('Products');
  const [sel, setSel] = React.useState([]);
  const [dir, setDir] = React.useState('asc');
  const Thumb = window.Thumb;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: ['Products', 'Inventory', 'Categories', 'Variations', 'Tags', 'Questions'],
    style: {
      border: 'none'
    }
  })), limit === 'warning' && /*#__PURE__*/React.createElement(Banner, {
    tone: "warning",
    title: "Product catalog: 850 / 1,000 (85%)",
    description: "You are getting close to your plan limit.",
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onDismissLimit,
      style: {
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
        color: 'var(--wc-text-muted)'
      }
    }, "Not now"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Upgrade Plan"))
  }), limit === 'danger' && /*#__PURE__*/React.createElement(Banner, {
    tone: "danger",
    title: "Product catalog: 1000 / 1,000 (100%)",
    description: "You have hit your product limit.",
    actions: /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm"
    }, "Upgrade Plan")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '16px 30px 14px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) 24px/1.2 var(--wc-font-sans)'
    }
  }, "Products"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)',
      borderLeft: '1px solid var(--wc-border)',
      paddingLeft: 12
    }
  }, limit === 'danger' ? '1000' : '850', " items"), /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search products",
    width: 250
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "filter",
    label: "Filter"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "sliders-horizontal",
    label: "Columns"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "ellipsis-vertical",
    label: "More"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh-cw",
    label: "Refresh"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus"
  }, "Add Product")), /*#__PURE__*/React.createElement(DataTable, {
    selectable: true,
    columnDividers: true,
    rowHeight: 80,
    selected: sel,
    onSelect: setSel,
    sortKey: "status",
    sortDir: dir,
    onSort: () => setDir(dir === 'asc' ? 'desc' : 'asc'),
    columns: [{
      key: 'name',
      header: 'Name',
      width: 'minmax(320px,2.4fr)',
      render: r => /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 14
        }
      }, /*#__PURE__*/React.createElement(Thumb, {
        size: 58
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
        style: {
          font: 'var(--wc-weight-semibold) var(--wc-size-body)/1.3 var(--wc-font-sans)',
          color: 'var(--wc-text)'
        }
      }, r.name), r.sub && /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 4,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          whiteSpace: 'nowrap',
          font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
          color: 'var(--wc-text-micro)'
        }
      }, /*#__PURE__*/React.createElement("span", null, r.sub), /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--wc-gray-300)'
        }
      }, "|"), /*#__PURE__*/React.createElement("span", null, r.flag))))
    }, {
      key: 'status',
      header: 'Status',
      width: '1fr',
      sortable: true,
      render: r => /*#__PURE__*/React.createElement(StatusPill, null, r.status)
    }, {
      key: 'sku',
      header: 'SKU',
      width: '1.3fr'
    }, {
      key: 'type',
      header: 'Product Type',
      width: '1.2fr'
    }, {
      key: 'category',
      header: 'Category',
      width: '1fr'
    }, {
      key: 'price',
      header: 'Price',
      width: '.9fr'
    }, {
      key: 'inventory',
      header: 'Inventory',
      width: '1fr'
    }],
    rows: ROWS
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 30px'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    value: "20",
    options: ['20', '50', '100'],
    width: 86,
    size: "sm"
  }))));
}
Object.assign(window, {
  ProductsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/ProductsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/SettingsScreen.jsx
try { (() => {
const {
  Card,
  Icon,
  SearchInput,
  Button,
  IconButton,
  Switch,
  Checkbox,
  Radio,
  RadioGroup,
  Select,
  Input,
  Breadcrumb,
  DataTable,
  EmptyState,
  SegmentedControl,
  PageActionBar,
  SettingsSubNav,
  SettingsSection,
  SettingRow,
  SettingsSubPanel,
  Pagination
} = window.WC;
const GROUPS = [['General', [['box', 'Site Settings', "Personalise your site's information by setting up your Store Logo, Favicon, and Store Details."], ['users', 'Users & Access Management', 'Manage user accounts, roles, and access permissions across your store.'], ['mail', 'Email Editor', 'Customise the transactional emails your store sends to customers and staff.'], ['square-check', 'Log Monitoring', 'Monitor all integrations, audit, debug log'], ['languages', 'Languages', 'Add languages, reach new markets and manage per-language SEO and the front-end switcher.'], ['shield-check', 'Approval', 'Manage approval workflows, profiles, and the approval queue.']]], ['Page Settings', [['layout-grid', 'Category Page', 'Control how your products and information display on category pages, creating a user-friendly browsing experience.'], ['package', 'Product Page', 'Control how your products information display on the product page'], ['shopping-cart', 'Checkout', 'Customise your checkout process to ensure a smooth and secure experience.'], ['shopping-bag', 'Shopping Cart', 'Control how the information shopping cart page displays.']]]];
const SIDE = ['General', 'Page Settings', 'Commerce', 'Storefront', 'Growth & Communication', 'Others'];
function SettingsIndex({
  onOpen
}) {
  const [side, setSide] = React.useState('General');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 22px',
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1 var(--wc-font-sans)'
    }
  }, "Settings"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '230px 1fr',
      borderTop: '1px solid var(--wc-divider)',
      minHeight: 640
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      borderRight: '1px solid var(--wc-divider)',
      paddingTop: 8
    }
  }, SIDE.map(s => {
    const on = s === side;
    return /*#__PURE__*/React.createElement("button", {
      key: s,
      type: "button",
      onClick: () => setSide(s),
      style: {
        width: '100%',
        textAlign: 'left',
        padding: '11px 18px',
        border: 'none',
        cursor: 'pointer',
        borderLeft: '2px solid ' + (on ? 'var(--wc-blue-500)' : 'transparent'),
        background: on ? 'var(--wc-blue-50)' : 'transparent',
        color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-secondary)',
        font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
      }
    }, s);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wc-gray-25)',
      padding: '34px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 980,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) var(--wc-size-h1)/1.2 var(--wc-font-sans)'
    }
  }, "Settings"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '7px 0 22px',
      font: 'var(--wc-weight-regular) var(--wc-size-body-lg)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Manage your store\u2019s core configuration \u2014 from branding and payments to shipping, tax, customer accounts, and beyond."), /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search settings \u2014 e.g.",
    shape: "rounded",
    width: "100%",
    style: {
      height: 46,
      background: '#fff'
    }
  }), GROUPS.map(([group, items]) => /*#__PURE__*/React.createElement("div", {
    key: group,
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-caption)/1 var(--wc-font-sans)',
      letterSpacing: 'var(--wc-ls-micro)',
      textTransform: 'uppercase',
      color: 'var(--wc-text-secondary)'
    }
  }, group), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, items.map(([ic, title, desc]) => /*#__PURE__*/React.createElement("button", {
    key: title,
    type: "button",
    onClick: () => onOpen && onOpen(title),
    style: {
      textAlign: 'left',
      display: 'flex',
      gap: 14,
      padding: 18,
      cursor: 'pointer',
      background: '#fff',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-md)',
      boxShadow: 'var(--wc-shadow-card)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 34,
      borderRadius: 'var(--wc-radius-sm)',
      flex: '0 0 auto',
      border: '1px solid var(--wc-border)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--wc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 17
  })), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1.3 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 5,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1.45 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, desc))))))))))));
}

/* ---- shared frame for every settings detail page ---- */
function SettingsDetail({
  breadcrumb,
  nav,
  active,
  onNav,
  onBack,
  children,
  railFooter,
  barActions,
  contentMax = 720,
  pad = '26px 30px 40px',
  bodyHeight = 700
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(PageActionBar, {
    onCancel: onBack,
    onSave: onBack,
    actions: barActions
  }, /*#__PURE__*/React.createElement("span", {
    onClick: onBack,
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: breadcrumb
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      borderTop: '1px solid var(--wc-divider)',
      height: bodyHeight
    }
  }, /*#__PURE__*/React.createElement(SettingsSubNav, {
    items: nav,
    active: active,
    onSelect: onNav,
    footer: railFooter
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      background: 'var(--wc-gray-25)',
      padding: pad,
      overflowY: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: contentMax,
      margin: '0 auto',
      display: 'grid',
      gap: 24,
      alignContent: 'start'
    }
  }, children)))));
}

/* Customer Preview toggle pinned to the bottom of a page-settings rail. */
function PreviewToggle() {
  const [on, setOn] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '12px 14px',
      background: 'var(--wc-blue-50)',
      border: '1px solid var(--wc-blue-100)',
      borderRadius: 'var(--wc-radius-md)'
    }
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: on,
    onChange: setOn
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      font: 'var(--wc-weight-semibold) var(--wc-size-body)/1.2 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, "Customer Preview"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      marginTop: 3,
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.2 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "See live preview")));
}

/* ---- Settings › Category Page ---- */
function CategoryPageSettings({
  onBack
}) {
  const [nav, setNav] = React.useState('category');
  const [s, setS] = React.useState({
    heading: true,
    desc: false,
    banner: false,
    image: false,
    sub: true,
    defaults: false,
    prefs: true,
    sorting: false,
    configSort: true
  });
  const set = k => v => setS({
    ...s,
    [k]: v
  });
  const [heading, setHeading] = React.useState('Heading 2');
  const [subOpts, setSubOpts] = React.useState({
    a: false,
    b: false,
    c: true
  });
  const [mode, setMode] = React.useState('pagination');
  const [pos, setPos] = React.useState('Top');
  const [allowSelect, setAllowSelect] = React.useState(false);
  const [sortOpts, setSortOpts] = React.useState({});
  return /*#__PURE__*/React.createElement(SettingsDetail, {
    breadcrumb: ['Settings', 'Category Page'],
    onBack: onBack,
    active: nav,
    onNav: setNav,
    railFooter: /*#__PURE__*/React.createElement(PreviewToggle, null),
    nav: [{
      id: 'category',
      label: 'Category Information',
      icon: 'layout-grid'
    }, {
      id: 'product',
      label: 'Product Information',
      icon: 'package'
    }]
  }, /*#__PURE__*/React.createElement(SettingsSection, {
    icon: "folder",
    title: "Category Information",
    description: "Configure category title, description, images, pagination, display modes and more."
  }, /*#__PURE__*/React.createElement(SettingRow, {
    label: "Display category heading"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.heading,
    onChange: set('heading')
  })), s.heading && /*#__PURE__*/React.createElement(SettingsSubPanel, null, /*#__PURE__*/React.createElement(SettingRow, {
    divider: false,
    label: "Select heading style"
  }, /*#__PURE__*/React.createElement(Select, {
    value: heading,
    onChange: setHeading,
    width: 160,
    options: ['Heading 1', 'Heading 2', 'Heading 3', 'Heading 4']
  }))), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Display category description"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.desc,
    onChange: set('desc')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Display category banner image"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.banner,
    onChange: set('banner')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Display category image"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.image,
    onChange: set('image')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Subcategory option"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.sub,
    onChange: set('sub')
  })), s.sub && /*#__PURE__*/React.createElement(SettingsSubPanel, {
    gap: 14,
    padding: "16px 18px"
  }, /*#__PURE__*/React.createElement(Checkbox, {
    label: "Display subcategory",
    checked: subOpts.a,
    onChange: v => setSubOpts({
      ...subOpts,
      a: v
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Display products of subcategories",
    checked: subOpts.b,
    onChange: v => setSubOpts({
      ...subOpts,
      b: v
    })
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Display subcategory summary",
    checked: subOpts.c,
    onChange: v => setSubOpts({
      ...subOpts,
      c: v
    })
  }))), /*#__PURE__*/React.createElement(SettingsSection, {
    icon: "package",
    title: "Product Information",
    description: "Configure summaries, price, sales, stock, display modes and other product details."
  }, /*#__PURE__*/React.createElement(SettingRow, {
    label: "Use default product listing configurations"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.defaults,
    onChange: set('defaults')
  })), !s.defaults && /*#__PURE__*/React.createElement(SettingsSubPanel, {
    gap: 0,
    padding: "6px 18px"
  }, /*#__PURE__*/React.createElement(SettingRow, {
    divider: false,
    label: "Select display type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Grid view",
    width: 160,
    options: ['Grid view', 'List view']
  })), /*#__PURE__*/React.createElement(SettingRow, {
    divider: false,
    label: "Maximum number of columns per row",
    description: "This setting defines the maximum number of products per row. The actual number may be lower if the available container width is small."
  }, /*#__PURE__*/React.createElement(Select, {
    value: "4 Columns",
    width: 160,
    options: ['2 Columns', '3 Columns', '4 Columns', '5 Columns']
  }))), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Set product display preferences"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.prefs,
    onChange: set('prefs')
  })), s.prefs && /*#__PURE__*/React.createElement(SettingsSubPanel, {
    gap: 14,
    padding: "16px 18px"
  }, /*#__PURE__*/React.createElement(RadioGroup, {
    value: mode,
    onChange: setMode,
    options: [{
      value: 'pagination',
      label: 'Display pagination',
      children: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gap: 12,
          paddingTop: 12
        }
      }, /*#__PURE__*/React.createElement(SettingRow, {
        divider: false,
        height: 34,
        style: {
          padding: 0
        },
        label: "Select pagination position"
      }, /*#__PURE__*/React.createElement(Select, {
        value: pos,
        onChange: setPos,
        width: 160,
        options: ['Top', 'Bottom', 'Both']
      })), /*#__PURE__*/React.createElement(SettingRow, {
        divider: false,
        height: 34,
        style: {
          padding: 0
        },
        label: "Number of products per page"
      }, /*#__PURE__*/React.createElement(Input, {
        defaultValue: "10",
        width: 160
      })), /*#__PURE__*/React.createElement(Checkbox, {
        label: 'Allow user to select "Number of products per page"',
        checked: allowSelect,
        onChange: setAllowSelect
      }))
    }, {
      value: 'load',
      label: 'Enable load more'
    }]
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Set product sorting"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.sorting,
    onChange: set('sorting')
  })), /*#__PURE__*/React.createElement(SettingRow, {
    label: "Configure sorting options"
  }, /*#__PURE__*/React.createElement(Switch, {
    checked: s.configSort,
    onChange: set('configSort')
  })), s.configSort && /*#__PURE__*/React.createElement(SettingsSubPanel, {
    gap: 14,
    padding: "16px 18px"
  }, ['Alphabetical', 'Featured', 'New', 'Top selling', 'Price', 'Created date'].map(o => /*#__PURE__*/React.createElement(Checkbox, {
    key: o,
    label: o,
    checked: !!sortOpts[o],
    onChange: v => setSortOpts({
      ...sortOpts,
      [o]: v
    })
  })))));
}

/* ---- toolbar shared by the list-style settings pages ---- */
function ListHeader({
  title,
  count,
  filters,
  actions,
  searchWidth = 205,
  searchPlaceholder = 'Search'
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) var(--wc-size-h2)/1.2 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 20,
      background: 'var(--wc-border)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, count)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: searchPlaceholder,
    width: searchWidth
  }), filters, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), actions));
}

/* ---- Settings › Approval Workflows (empty list) ---- */
function ApprovalSettings({
  onBack
}) {
  const [nav, setNav] = React.useState('workflows');
  const [scope, setScope] = React.useState('All');
  return /*#__PURE__*/React.createElement(SettingsDetail, {
    breadcrumb: ['Settings', 'Approval Workflows'],
    onBack: onBack,
    active: nav,
    onNav: setNav,
    contentMax: 1500,
    pad: "26px 30px 30px",
    nav: [{
      id: 'workflows',
      label: 'Approval Workflows',
      icon: 'shield-check'
    }, {
      id: 'requests',
      label: 'Requests',
      icon: 'inbox'
    }, {
      id: 'reviewers',
      label: 'Reviewer Groups',
      icon: 'users'
    }]
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListHeader, {
    title: "Approval Workflows",
    count: "0 Items",
    filters: /*#__PURE__*/React.createElement(SegmentedControl, {
      options: ['All', 'Active', 'Inactive'],
      value: scope,
      onChange: setScope
    }),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "refresh-cw",
      label: "Refresh"
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Add New"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    container: true,
    gutter: 16,
    rowHeight: 44,
    minBodyHeight: 430,
    selectable: true,
    rows: [],
    columns: [{
      key: 'name',
      header: 'Name',
      width: '2fr'
    }, {
      key: 'applies',
      header: 'Applies To',
      width: '1.2fr'
    }, {
      key: 'triggers',
      header: 'Triggers On',
      width: '1.2fr'
    }, {
      key: 'reviewerType',
      header: 'Reviewer Type',
      width: '1.2fr'
    }, {
      key: 'status',
      header: 'Status',
      width: '1fr'
    }, {
      key: 'reviewer',
      header: 'Reviewer',
      width: '1.2fr'
    }, {
      key: 'lastUsed',
      header: 'Last Used',
      width: '1fr'
    }, {
      key: 'actions',
      header: 'Actions',
      width: '90px',
      align: 'right'
    }],
    empty: /*#__PURE__*/React.createElement(EmptyState, {
      iconTile: false,
      icon: "clipboard-list",
      title: "No workflows added",
      action: /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)',
          color: 'var(--wc-link)',
          textDecoration: 'underline'
        }
      }, "+ Add Workflow")
    })
  })), /*#__PURE__*/React.createElement(Pagination, {
    style: {
      marginTop: 18
    },
    page: 1,
    pageCount: 1,
    pageSize: "10"
  })));
}

/* ---- Settings › Email Editor (toggle list) ---- */
const EMAIL_ROWS = ['Appointment cancel notification|Customer|Appointment cancel notification %booking_name%', 'Appointment Notification|Customer|Reminder for your appointment %booking_name%', 'New Appointment|Payment|New booking received %booking_name%', 'New Booking|Admin|New booking received', 'Pending Booking Payment|Customer|Your payment is pending for Booking ID# %booking_id%', 'Booking Payment|Customer|Thank you for your payment', 'Appointment Success|Customer|Thank you for your booking', 'Pre Order|Customer|Thanks for requesting a pre order. Your pre order (%pre…', 'Abandoned Cart|Customer|Incomplete Order Notification # %cart_id%', 'Wish List Share|wish_list|%customer_first_name% %customer_last_name% has …'].map((r, i) => {
  const p = r.split('|');
  return {
    id: 'e' + i,
    name: p[0],
    type: p[1],
    subject: p[2]
  };
});
function EmailEditorSettings({
  onBack
}) {
  const [nav, setNav] = React.useState('templates');
  const [page, setPage] = React.useState(1);
  const [on, setOn] = React.useState(() => EMAIL_ROWS.map(() => true));
  return /*#__PURE__*/React.createElement(SettingsDetail, {
    breadcrumb: ['Settings', 'Email Editor'],
    onBack: onBack,
    active: nav,
    onNav: setNav,
    contentMax: 1500,
    pad: "26px 30px 30px",
    barActions: /*#__PURE__*/React.createElement(React.Fragment, null),
    nav: [{
      id: 'templates',
      label: 'Email Templates',
      icon: 'mail'
    }]
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListHeader, {
    title: "Email Editor",
    count: "99 items",
    searchWidth: 240,
    searchPlaceholder: "Search by email name",
    filters: /*#__PURE__*/React.createElement(Select, {
      value: "All",
      width: 155,
      shape: "pill",
      options: ['All', 'Customer', 'Admin', 'Payment']
    }),
    actions: /*#__PURE__*/React.createElement(IconButton, {
      icon: "rotate-ccw",
      size: 40,
      label: "Refresh"
    })
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    container: true,
    gutter: 16,
    rowHeight: 44,
    minBodyHeight: 560,
    rows: EMAIL_ROWS,
    columns: [{
      key: 'name',
      header: 'Email Name',
      width: '1.5fr',
      render: r => /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
          color: 'var(--wc-link)',
          textDecoration: 'none'
        }
      }, r.name)
    }, {
      key: 'type',
      header: 'Type',
      width: '1fr'
    }, {
      key: 'subject',
      header: 'Subject',
      width: '2fr',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'block',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }, r.subject)
    }, {
      key: 'on',
      header: '',
      width: '60px',
      align: 'right',
      render: r => {
        const i = EMAIL_ROWS.indexOf(r);
        return /*#__PURE__*/React.createElement(Switch, {
          checked: on[i],
          onChange: v => setOn(on.map((x, j) => j === i ? v : x))
        });
      }
    }]
  })), /*#__PURE__*/React.createElement(Pagination, {
    style: {
      marginTop: 18
    },
    page: page,
    pageCount: 10,
    onChange: setPage,
    pageSize: "10"
  })));
}
/* ---- Settings › Users & Access Management (groups table) ---- */
const GROUP_ROWS = ['Administrators|Admin|4 Users', 'Content Editor|Content Editor|0 Users', 'Content Manager|Content Manager|0 Users', 'Customer Service|Customer Service|0 Users', 'Fulfillment Manager|Fulfillment Manager|0 Users', 'Inventory Manager|Inventory Manager|0 Users', 'Order Manager|Order Manager|0 Users', 'Returns & Refund Manager|Returns & Refund Manager|0 Users', 'Store Manager|Store Manager|0 Users', 'Viewer|Viewer|0 Users'].map((r, i) => {
  const parts = r.split('|');
  return {
    id: 'g' + i,
    name: parts[0],
    role: parts[1],
    members: parts[2]
  };
});
function UsersAccessSettings({
  onBack
}) {
  const [nav, setNav] = React.useState('groups');
  const [selected, setSelected] = React.useState([]);
  return /*#__PURE__*/React.createElement(SettingsDetail, {
    breadcrumb: ['Settings', 'Users & Access Management'],
    onBack: onBack,
    active: nav,
    onNav: setNav,
    contentMax: 1500,
    pad: "26px 30px 30px",
    nav: [{
      id: 'groups',
      label: 'Groups',
      icon: 'users-round'
    }, {
      id: 'roles',
      label: 'Roles',
      icon: 'shield'
    }, {
      id: 'um',
      label: 'User Management',
      group: true,
      children: [{
        id: 'users',
        label: 'Users',
        icon: 'user'
      }, {
        id: 'invites',
        label: 'Pending Invitations',
        icon: 'mail'
      }]
    }]
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ListHeader, {
    title: "Groups",
    count: "10 items",
    filters: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Select, {
      value: "All Groups",
      width: 168,
      shape: "pill",
      options: ['All Groups', 'Assigned', 'Unassigned']
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "settings",
      label: "Column settings",
      shape: "rounded"
    })),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      icon: "filter",
      label: "Filter"
    }), /*#__PURE__*/React.createElement(IconButton, {
      icon: "refresh-cw",
      label: "Refresh"
    }), /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Create Group"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(DataTable, {
    container: true,
    gutter: 16,
    rowHeight: 44,
    minBodyHeight: 560,
    selected: selected,
    onSelect: setSelected,
    selectable: true,
    rows: GROUP_ROWS,
    columns: [{
      key: 'name',
      header: 'Group Name',
      width: '2fr',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "shield",
        size: 16,
        color: "var(--wc-gray-400)"
      }), /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: e => e.preventDefault(),
        style: {
          font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
          color: 'var(--wc-link)',
          textDecoration: 'none'
        }
      }, r.name))
    }, {
      key: 'role',
      header: 'Assigned Role',
      width: '1.4fr'
    }, {
      key: 'members',
      header: 'Members',
      width: '1fr'
    }]
  })), /*#__PURE__*/React.createElement(Pagination, {
    style: {
      marginTop: 18
    },
    page: 1,
    pageCount: 1,
    pageSize: "10"
  })));
}
function SettingsScreen() {
  const [open, setOpen] = React.useState(null);
  const back = () => setOpen(null);
  if (open === 'Users & Access Management') return /*#__PURE__*/React.createElement(UsersAccessSettings, {
    onBack: back
  });
  if (open === 'Approval') return /*#__PURE__*/React.createElement(ApprovalSettings, {
    onBack: back
  });
  if (open === 'Email Editor') return /*#__PURE__*/React.createElement(EmailEditorSettings, {
    onBack: back
  });
  if (open) return /*#__PURE__*/React.createElement(CategoryPageSettings, {
    onBack: back
  });
  return /*#__PURE__*/React.createElement(SettingsIndex, {
    onOpen: setOpen
  });
}
Object.assign(window, {
  SettingsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/SettingsScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/admin/WebsiteScreen.jsx
try { (() => {
const {
  Card,
  Tabs,
  Button,
  IconButton,
  SearchInput,
  DataTable,
  StatusPill,
  Badge,
  Icon,
  EmptyState
} = window.WC;
const PAGES = [['Home', 'Published', 'Open', 'success', 0, 'Default'], ['Shop', 'Published', 'Restricted', 'warning', 1], ['Features', 'Published', 'Open', 'success', 5], ['Lookbook', 'Published', 'Open', 'success', 3], ['About Us', 'Published', 'Open', 'success', 0], ['Blog', 'Published', 'Open', 'success', 8], ['Contact Us', 'Unpublished', 'Hidden', 'neutral', 0]];
const LAYOUTS = [['Checkout_Read_Only', '1 pages'], ['Blog Layout', '3 pages'], ['Product Layout', '1 pages'], ['Checkout Layout', '1 pages'], ['Product Listing Layout', '6 pages'], ['Fluid Layout', '12 pages', 'Default'], ['Home', '2 pages'], ['Fixed Layout', '24 pages'], ['Webcommander', '3 pages'], ['Webcommander-default', '19 pages']];
function PagesTab() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '18px 30px 14px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: 'var(--wc-weight-bold) 24px/1.2 var(--wc-font-sans)'
    }
  }, "Pages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 2,
      padding: 3,
      background: 'var(--wc-gray-100)',
      borderRadius: 'var(--wc-radius-pill)'
    }
  }, [['Pages', 26, true], ['System', 40, false]].map(([l, n, on]) => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      height: 28,
      padding: '0 14px',
      borderRadius: 'var(--wc-radius-pill)',
      background: on ? '#fff' : 'transparent',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: on ? 'var(--wc-text)' : 'var(--wc-text-muted)'
    }
  }, l, /*#__PURE__*/React.createElement(Badge, {
    tone: "count",
    size: "sm"
  }, n)))), /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search",
    width: 250,
    shape: "rounded"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "refresh-cw",
    label: "Refresh"
  }), /*#__PURE__*/React.createElement(Button, {
    icon: "plus"
  }, "Create Page")), /*#__PURE__*/React.createElement(DataTable, {
    rowHeight: 44,
    columns: [{
      key: 'page',
      header: 'Page',
      width: '1.4fr',
      render: r => /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'inline-flex',
          alignItems: 'baseline',
          gap: 8
        }
      }, /*#__PURE__*/React.createElement("a", {
        href: '#page-' + r.page,
        style: {
          font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)'
        }
      }, r.page), r.tag && /*#__PURE__*/React.createElement("em", {
        style: {
          font: 'italic var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
          color: 'var(--wc-text-micro)'
        }
      }, r.tag))
    }, {
      key: 'status',
      header: 'Content Status',
      width: '1fr',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        tone: r.status === 'Published' ? 'success' : 'neutral'
      }, r.status)
    }, {
      key: 'visibility',
      header: 'Visibility',
      width: '1fr',
      render: r => /*#__PURE__*/React.createElement(StatusPill, {
        variant: "filled",
        tone: r.tone
      }, r.visibility)
    }, {
      key: 'author',
      header: 'Author',
      width: '1fr'
    }, {
      key: 'modified',
      header: 'Last Modified',
      width: '1.1fr'
    }, {
      key: 'stores',
      header: 'Connected Stores',
      width: '1fr'
    }],
    rows: PAGES.map(([page, status, visibility, tone, stores, tag], i) => ({
      id: i,
      page,
      status,
      visibility,
      tone,
      stores,
      tag,
      author: 'Steve Smith',
      modified: '2023/06/26 12:26'
    }))
  }));
}
function LayoutsTab() {
  const [sel, setSel] = React.useState('Checkout_Read_Only');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '250px 1fr',
      borderTop: '1px solid var(--wc-divider)',
      minHeight: 700
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRight: '1px solid var(--wc-divider)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '16px 16px 10px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-body-lg)/1 var(--wc-font-sans)'
    }
  }, "Layouts"), /*#__PURE__*/React.createElement("a", {
    href: "#create-layout",
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, "+ Create")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px 12px'
    }
  }, /*#__PURE__*/React.createElement(SearchInput, {
    placeholder: "Search layouts\u2026",
    shape: "rounded",
    width: "100%"
  })), LAYOUTS.map(([name, pages, tag]) => {
    const on = name === sel;
    return /*#__PURE__*/React.createElement("button", {
      key: name,
      type: "button",
      onClick: () => setSel(name),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 14px',
        cursor: 'pointer',
        border: 'none',
        borderLeft: '3px solid ' + (on ? 'var(--wc-blue-500)' : 'transparent'),
        background: on ? 'var(--wc-blue-50)' : 'transparent',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 'var(--wc-radius-xs)',
        border: '1px solid var(--wc-border)',
        display: 'grid',
        placeItems: 'center',
        color: on ? 'var(--wc-blue-500)' : 'var(--wc-text-muted)',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "layout-panel-top",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: 'var(--wc-weight-semibold) var(--wc-size-body)/1 var(--wc-font-sans)',
        color: 'var(--wc-text)'
      }
    }, name), tag && /*#__PURE__*/React.createElement(Badge, {
      tone: "info",
      size: "sm"
    }, tag)), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'block',
        marginTop: 3,
        font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
        color: 'var(--wc-text-micro)'
      }
    }, pages)), /*#__PURE__*/React.createElement(Icon, {
      name: "ellipsis-vertical",
      size: 15,
      color: "var(--wc-text-micro)"
    }));
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '14px 18px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "Layouts / ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--wc-text)',
      fontWeight: 700
    }
  }, sel)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "neutral",
    size: "sm",
    icon: "ellipsis"
  }, "More"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    icon: "pencil"
  }, "Edit Layout"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      padding: '0 18px 14px',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 15
  }), "1 pages use this layout"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), "Last edited ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--wc-text)'
    }
  }, "Thu, 27 Aug 2026"))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--wc-gray-50)',
      borderTop: '1px solid var(--wc-divider)',
      minHeight: 560
    }
  }, /*#__PURE__*/React.createElement(EmptyState, {
    title: "Start designing here from scratch",
    action: /*#__PURE__*/React.createElement(Button, {
      icon: "plus"
    }, "Start Designing"),
    style: {
      padding: '150px 20px'
    }
  }))));
}
function WebsiteScreen() {
  const [tab, setTab] = React.useState('Pages');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--wc-page-pad)'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 0,
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    value: tab,
    onChange: setTab,
    items: ['Pages', 'Layouts', 'Navigation', 'Templates', 'Blogs', 'Carousels', 'Articles'],
    style: {
      border: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#cloud-assets",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 15
  }), "Cloud Asset Library"), /*#__PURE__*/React.createElement("a", {
    href: "#assets",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "folder",
    size: 15
  }), "Asset Library"))), tab === 'Layouts' ? /*#__PURE__*/React.createElement(LayoutsTab, null) : /*#__PURE__*/React.createElement(PagesTab, null)));
}
Object.assign(window, {
  WebsiteScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/admin/WebsiteScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/EditorCanvas.jsx
try { (() => {
const {
  ElementToolbar,
  Icon,
  Button
} = window.WC;
function BrowserChrome({
  url
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      padding: '10px 14px',
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, ['#d9dde2', '#d9dde2', '#d9dde2'].map((c, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 9,
      height: 9,
      borderRadius: '50%',
      background: c
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 26,
      borderRadius: 'var(--wc-radius-sm)',
      background: 'var(--wc-gray-100)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 12px',
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, url));
}
function EditorCanvas({
  selected,
  onSelect
}) {
  const [hover, setHover] = React.useState(null);
  const outline = id => selected === id ? '1px solid var(--wc-blue-500)' : hover === id ? '1px solid var(--wc-blue-400)' : '1px solid transparent';
  return /*#__PURE__*/React.createElement("div", {
    className: "wc-scroll",
    style: {
      flex: 1,
      minWidth: 0,
      overflow: 'auto',
      background: 'var(--wc-canvas-editor)'
    }
  }, /*#__PURE__*/React.createElement(BrowserChrome, {
    url: "https://demowc.mywebcommander.com/home"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 480,
      height: 108,
      background: 'linear-gradient(120deg,#e8e2d7,#dcd4c6)',
      margin: '0 0 26px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 34px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      maxWidth: 560,
      font: 'var(--wc-weight-regular) 30px/1.28 Georgia,serif',
      color: '#243342'
    }
  }, "Best Outdoor Furniture Materials For Australian Weather"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: '#5d6b7a'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 15
  }), "Thu, 8 May 2025")), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover('section'),
    onMouseLeave: () => setHover(null),
    onClick: () => onSelect('section'),
    style: {
      position: 'relative',
      marginTop: 90,
      border: outline('section'),
      padding: '0 0 44px'
    }
  }, hover === 'section' && selected !== 'section' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -13,
      left: 10,
      zIndex: 3
    }
  }, /*#__PURE__*/React.createElement(ElementToolbar, {
    variant: "chip",
    label: "Section"
  })), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: e => {
      e.stopPropagation();
      setHover('text');
    },
    onClick: e => {
      e.stopPropagation();
      onSelect('text');
    },
    style: {
      position: 'relative',
      margin: '34px 0 0',
      border: outline('text'),
      padding: '9px 12px',
      background: '#fff'
    }
  }, selected === 'text' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -34,
      left: 0,
      zIndex: 4
    }
  }, /*#__PURE__*/React.createElement(ElementToolbar, {
    label: "Text"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) 15px/1.79 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, "Enter Text Content")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      placeItems: 'center',
      padding: '26px 0 0'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 34,
      padding: '0 16px',
      background: '#fff',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-sm)',
      cursor: 'pointer',
      boxShadow: 'var(--wc-shadow-card)',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  }), "Add Element")), selected === 'section' && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -14,
      left: 0,
      right: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: '50%',
      background: '#fff',
      border: '1px solid var(--wc-blue-500)',
      color: 'var(--wc-blue-500)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus",
    size: 15
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '80px 34px 40px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-regular) 38px/1.2 Georgia,serif',
      color: '#243342'
    }
  }, "Discover Our Exclusive Gardenwares"))));
}
Object.assign(window, {
  EditorCanvas
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/EditorCanvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/EditorTopBar.jsx
try { (() => {
const {
  Button,
  IconButton,
  SegmentedControl,
  Icon
} = window.WC;
function EditorTopBar({
  device,
  onDevice
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      height: 'var(--wc-topbar-h)',
      display: 'flex',
      alignItems: 'center',
      background: '#fff',
      borderBottom: '1px solid var(--wc-border)',
      paddingRight: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'var(--wc-sidebar-w)',
      flex: '0 0 var(--wc-sidebar-w)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.png",
    width: "32",
    alt: "WebCommander"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      height: 30,
      padding: '0 12px',
      background: '#fff',
      border: '1px solid var(--wc-border-strong)',
      borderRadius: 'var(--wc-radius-sm)',
      cursor: 'pointer',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "file-text",
    size: 15,
    color: "var(--wc-text-muted)"
  }), "Home", /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--wc-text-muted)"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: device,
    onChange: onDevice,
    options: [{
      value: 'desktop',
      icon: 'monitor'
    }, {
      value: 'tablet',
      icon: 'tablet'
    }, {
      value: 'mobile',
      icon: 'smartphone'
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 30,
      padding: '0 12px',
      border: '1px solid var(--wc-border)',
      borderRadius: 'var(--wc-radius-sm)',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "zoom-in",
    size: 15
  }), "100%"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--wc-gray-300)'
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "ellipsis",
    size: 15
  }), "Desktop"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: "undo-2",
    variant: "plain",
    label: "Undo"
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: "redo-2",
    variant: "plain",
    label: "Redo"
  }), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 9,
      height: 30,
      padding: '0 13px',
      background: '#fff',
      border: '1px solid var(--wc-border-strong)',
      borderRadius: 'var(--wc-radius-pill)',
      cursor: 'pointer',
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 14,
      borderRadius: 'var(--wc-radius-pill)',
      background: 'linear-gradient(90deg,#2563eb,#22c55e)',
      display: 'inline-block'
    }
  }), "Brand Kit"), /*#__PURE__*/React.createElement(Button, {
    variant: "neutral",
    size: "sm",
    icon: "history"
  }, "Version History"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    style: {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      paddingRight: 14
    }
  }, "Publish"), /*#__PURE__*/React.createElement(Button, {
    style: {
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      padding: '0 10px',
      borderLeft: '1px solid rgba(255,255,255,.35)'
    },
    icon: "chevron-down"
  })), /*#__PURE__*/React.createElement(IconButton, {
    icon: "bell",
    variant: "plain",
    badge: 2,
    label: "Notifications"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--wc-blue-50)',
      color: 'var(--wc-blue-500)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 15
  }))));
}
Object.assign(window, {
  EditorTopBar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/EditorTopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/SectionInspector.jsx
try { (() => {
const {
  InspectorSection,
  PropertyRow,
  Input,
  SegmentedControl,
  OptionTile,
  Icon
} = window.WC;
function Radio({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    },
    onClick: onChange
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      border: '1px solid ' + (checked ? 'var(--wc-blue-500)' : 'var(--wc-border-strong)'),
      background: '#fff'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--wc-blue-500)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, label));
}
function SectionInspector() {
  const [width, setWidth] = React.useState('Full width');
  const [bg, setBg] = React.useState('None');
  const [anim, setAnim] = React.useState('None');
  const [vis, setVis] = React.useState({
    Desktop: 'Show',
    Tablet: 'Show',
    Mobile: 'Show'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InspectorSection, {
    title: "General Settings"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-body)/1 var(--wc-font-sans)',
      color: 'var(--wc-text-secondary)'
    }
  }, "Content width"), ['Full width', 'Default', 'Custom'].map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o,
    label: o,
    checked: width === o,
    onChange: () => setWidth(o)
  })))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Spacing (Internal)"
  }, /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Padding (px)",
    align: "start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,44px)',
      gap: 4
    }
  }, [0, 0, 0, 0].map((v, i) => /*#__PURE__*/React.createElement(Input, {
    key: i,
    size: "sm",
    align: "center",
    defaultValue: v
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,44px)',
      gap: 4,
      marginTop: 3,
      font: 'var(--wc-weight-regular) 10px/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)',
      textAlign: 'center'
    }
  }, ['T', 'R', 'B', 'L'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))))), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Columns Gap"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "0",
    unit: "px",
    width: 92
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    defaultValue: "0",
    style: {
      width: 70
    }
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Rows Gap"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "0",
    unit: "px",
    width: 92
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    defaultValue: "0",
    style: {
      width: 70
    }
  }))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Background"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: bg,
    onChange: setBg,
    options: ['None', 'Image', 'Color'],
    style: {
      width: '100%'
    }
  })), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Animation"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 8
    }
  }, [['ban', 'None'], ['contrast', 'Fade'], ['panel-right', 'Slide']].map(([i, l]) => /*#__PURE__*/React.createElement(OptionTile, {
    key: l,
    icon: i,
    label: l,
    selected: anim === l,
    onClick: () => setAnim(l)
  })))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Visibility"
  }, ['Desktop', 'Tablet', 'Mobile'].map(d => /*#__PURE__*/React.createElement(PropertyRow, {
    key: d,
    label: d
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "bordered",
    value: vis[d],
    options: ['Show', 'Hide'],
    onChange: v => setVis({
      ...vis,
      [d]: v
    })
  })))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Advanced",
    defaultOpen: false
  }));
}
Object.assign(window, {
  SectionInspector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/SectionInspector.jsx", error: String((e && e.message) || e) }); }

// ui_kits/editor/TextInspector.jsx
try { (() => {
const {
  InspectorSection,
  PropertyRow,
  AiToolsPanel,
  Input,
  Select,
  SegmentedControl,
  SegmentedControl: SC,
  Button,
  Icon,
  OptionTile
} = window.WC;
const AI = [{
  label: 'Generate',
  icon: 'plus'
}, {
  label: 'Rewrite',
  icon: 'pencil'
}, {
  label: 'Shorter',
  icon: 'align-left'
}, {
  label: 'Fix grammar',
  icon: 'check'
}, {
  label: 'Change tone',
  icon: 'mic',
  wide: true
}];
function ColorSwatch({
  value = '#1f2733'
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      height: 'var(--wc-control-h)',
      padding: '0 8px',
      background: '#fff',
      border: '1px solid var(--wc-border-strong)',
      borderRadius: 'var(--wc-radius-sm)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 'var(--wc-radius-xs)',
      background: value
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-down",
    size: 14,
    color: "var(--wc-text-muted)"
  }));
}
function TextInspector() {
  const [cse, setCse] = React.useState('Aa');
  const [align, setAlign] = React.useState('left');
  const [anim, setAnim] = React.useState('None');
  const [vis, setVis] = React.useState({
    Desktop: 'Show',
    Tablet: 'Show',
    Mobile: 'Show'
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(AiToolsPanel, {
    actions: AI
  })), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "General Settings"
  }, /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Link"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "neutral",
    icon: "link",
    fullWidth: true
  }, "Add link"))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Typography"
  }, /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Type"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Paragraph",
    options: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'],
    width: 170
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-regular) var(--wc-size-caption)/1.5 var(--wc-font-sans)',
      color: 'var(--wc-text-muted)'
    }
  }, "This style is inherited from the brand kit.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("a", {
    href: "#brand-kit"
  }, "Edit brand kit style")), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Font"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Base Font (Set)",
    options: ['Base Font (Set)', 'Manrope', 'Source Sans 3'],
    width: 170
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Font Size"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "15",
    unit: "px",
    width: 92
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    defaultValue: "15",
    max: "80",
    style: {
      width: 70
    }
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Weight"
  }, /*#__PURE__*/React.createElement(Select, {
    value: "Regular",
    options: ['Light', 'Regular', 'Medium', 'Semibold', 'Bold'],
    width: 170
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Line Height"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "1.79",
    width: 92
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    defaultValue: "60",
    style: {
      width: 70
    }
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Letter Spacing"
  }, /*#__PURE__*/React.createElement(Input, {
    defaultValue: "0",
    width: 92
  }), /*#__PURE__*/React.createElement("input", {
    type: "range",
    defaultValue: "20",
    style: {
      width: 70
    }
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Case"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: cse,
    onChange: setCse,
    options: ['Aa', 'AG', 'Ag', 'ab']
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Style"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: "",
    options: [{
      value: 'b',
      label: 'B'
    }, {
      value: 'i',
      label: 'I'
    }, {
      value: 'u',
      label: 'U'
    }]
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Color"
  }, /*#__PURE__*/React.createElement(ColorSwatch, null))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Formatting"
  }, /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Alignment"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: align,
    onChange: setAlign,
    options: [{
      value: 'left',
      icon: 'align-left'
    }, {
      value: 'center',
      icon: 'align-center'
    }, {
      value: 'right',
      icon: 'align-right'
    }, {
      value: 'justify',
      icon: 'align-justify'
    }]
  })), /*#__PURE__*/React.createElement(PropertyRow, {
    label: "Text Style"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    size: "sm",
    value: "",
    options: [{
      value: 'ul',
      icon: 'list'
    }, {
      value: 'ol',
      icon: 'list-ordered'
    }]
  }))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Spacing"
  }, [['Padding (px)'], ['Margin (px)']].map(([label]) => /*#__PURE__*/React.createElement(PropertyRow, {
    key: label,
    label: label,
    align: "start"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,44px)',
      gap: 4
    }
  }, [0, 0, 0, 0].map((v, i) => /*#__PURE__*/React.createElement(Input, {
    key: i,
    size: "sm",
    align: "center",
    defaultValue: v
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,44px)',
      gap: 4,
      marginTop: 3,
      font: 'var(--wc-weight-regular) 10px/1 var(--wc-font-sans)',
      color: 'var(--wc-text-micro)',
      textAlign: 'center'
    }
  }, ['T', 'R', 'B', 'L'].map(t => /*#__PURE__*/React.createElement("span", {
    key: t
  }, t))))))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Visibility"
  }, ['Desktop', 'Tablet', 'Mobile'].map(d => /*#__PURE__*/React.createElement(PropertyRow, {
    key: d,
    label: d
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    variant: "bordered",
    value: vis[d],
    options: ['Show', 'Hide'],
    onChange: v => setVis({
      ...vis,
      [d]: v
    })
  })))), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Animation"
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    value: "Entrance",
    options: ['Entrance', 'Mouse Effects'],
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 8
    }
  }, [['ban', 'None'], ['contrast', 'Fade'], ['zoom-in', 'Zoom'], ['panel-right', 'Slide'], ['rotate-cw', 'Rotate'], ['activity', 'Bounce'], ['flip-horizontal', 'Flip'], ['maximize', 'Expand']].map(([i, l]) => /*#__PURE__*/React.createElement(OptionTile, {
    key: l,
    icon: i,
    label: l,
    selected: anim === l,
    onClick: () => setAnim(l)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 16px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--wc-weight-semibold) var(--wc-size-caption)/1 var(--wc-font-sans)',
      letterSpacing: 'var(--wc-ls-micro)',
      textTransform: 'uppercase',
      color: 'var(--wc-text-secondary)'
    }
  }, "Related settings"), /*#__PURE__*/React.createElement(Button, {
    variant: "neutral",
    fullWidth: true,
    trailingIcon: "external-link",
    style: {
      marginTop: 12
    }
  }, "Text Personalisation")), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Replace Element",
    defaultOpen: false
  }), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Advanced",
    defaultOpen: false
  }), /*#__PURE__*/React.createElement(InspectorSection, {
    title: "Actions",
    defaultOpen: false
  }));
}
Object.assign(window, {
  TextInspector
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/editor/TextInspector.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.StatusPill = __ds_scope.StatusPill;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TaskRow = __ds_scope.TaskRow;

__ds_ns.UsageMeter = __ds_scope.UsageMeter;

__ds_ns.AiToolsPanel = __ds_scope.AiToolsPanel;

__ds_ns.ElementToolbar = __ds_scope.ElementToolbar;

__ds_ns.InspectorSection = __ds_scope.InspectorSection;

__ds_ns.OptionTile = __ds_scope.OptionTile;

__ds_ns.PropertyRow = __ds_scope.PropertyRow;

__ds_ns.Banner = __ds_scope.Banner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.PromoBanner = __ds_scope.PromoBanner;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.LoadingRegion = __ds_scope.LoadingRegion;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastStack = __ds_scope.ToastStack;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.SearchInput = __ds_scope.SearchInput;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.SIDEBAR_ITEMS = __ds_scope.SIDEBAR_ITEMS;

__ds_ns.SidebarNav = __ds_scope.SidebarNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

__ds_ns.PageActionBar = __ds_scope.PageActionBar;

__ds_ns.SettingRow = __ds_scope.SettingRow;

__ds_ns.SettingsSection = __ds_scope.SettingsSection;

__ds_ns.SettingsSubNav = __ds_scope.SettingsSubNav;

__ds_ns.SettingsSubPanel = __ds_scope.SettingsSubPanel;

})();
